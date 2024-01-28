import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Section } from "./Section";
import ConnectButton from "./ConnectButton";
import AccountInfo from "./AccountInfo";
import { useAuthorization, Account } from "./AuthorizationProvider";
import { useConnection } from "./ConnectionProvider";
import SignTransactionButton from "./SignTransactionButton";

export default function MainScreen() {
  const { connection } = useConnection();
  const { selectedAccount } = useAuthorization();
  const [balance, setBalance] = useState<number | null>(null);

  const fetchAndUpdateBalance = useCallback(
    async (account: Account) => {
      console.log("Fetching balance for: " + account.publicKey);
      const fetchedBalance = await connection.getBalance(account.publicKey);
      console.log("Balance fetched: " + fetchedBalance);
      setBalance(fetchedBalance);
    },
    [connection]
  );

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchAndUpdateBalance(selectedAccount);
  }, [fetchAndUpdateBalance, selectedAccount]);

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          {selectedAccount && (
            <>
              <Section title="Sign Transaction">
                <SignTransactionButton />
              </Section>
            </>
          )}
        </View>
        {selectedAccount ? (
          <AccountInfo
            selectedAccount={selectedAccount}
            balance={balance}
          />
        ) : (
          <ConnectButton title="Connect wallet" />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    padding: 16,
    flex: 1,
  },
  container: {
    height: "70%",
  },
  buttonGroup: {
    flexDirection: "column",
    paddingVertical: 4,
  },
});
