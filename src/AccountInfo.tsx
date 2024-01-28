import React from "react";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { StyleSheet, View, Text } from "react-native";
import DisconnectButton from "./DisconnectButton";

interface Account {
  address: string;
  label?: string | undefined;
  publicKey: PublicKey;
}

type AccountInfoProps = Readonly<{
  selectedAccount: Account;
  balance: number | null;
}>;

function convertLamportsToSOL(lamports: number) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 1 }).format(
    (lamports || 0) / LAMPORTS_PER_SOL
  );
}

export default function AccountInfo({
  balance,
  selectedAccount,
}: AccountInfoProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>

        <Text style={styles.walletBalance}>
          {selectedAccount.label
            ? `Balance : ${
                balance ? convertLamportsToSOL(balance) : "0"
              } SOL`
            : "Wallet name not found"}
        </Text>

        <View style={styles.buttonGroup}>
          <DisconnectButton title={"Disconnect"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonGroup: {
    ustifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  walletHeader: {
    fontWeight: "bold",
  },
  walletBalance: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "brown",
    paddingBottom: 10
  },
  walletNameSubtitle: {
    fontSize: 12,
    marginBottom: 5,
  },
});
