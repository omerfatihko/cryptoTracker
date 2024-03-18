import { writable } from "svelte/store";
import cryptoCurrencyData from "$lib/JSON/cryptoCurrencies.json";

export const coinStore = writable([...cryptoCurrencyData.Coins]);