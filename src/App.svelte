<script lang="ts">
  import Header from "./Header.svelte";

  let exchangeRates: { [key: string]: number | any } = {};

  const URL =
    "https://v6.exchangerate-api.com/v6/37b11cfbc42c280dd9e35fcd/latest/USD";

  // Get the exchange rates from the API
  async function getData() {
    try {
      let response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      const { conversion_rates } = data;
      const filteredCurrencies = ["USD", "EUR", "GBP", "JPY", "RUB"];

      exchangeRates = Object.fromEntries(
        Object.entries(conversion_rates).filter(([key]) =>
          filteredCurrencies.includes(key),
        ),
      );
      console.log(exchangeRates);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  getData();

  // Show the exchange rate in the inputs when the user selects a currency
  let selectedCurrency1 = "USD";
  let selectedCurrency2 = "EUR";

  function handleSelectChange(event: any, currency: any) {
    if (currency === 1) {
      selectedCurrency1 = event.target.value;
      if (
        exchangeRates[selectedCurrency1] &&
        exchangeRates[selectedCurrency2]
      ) {
        rate1 = exchangeRates[selectedCurrency1];
        rate2 = exchangeRates[selectedCurrency2];
        const rate1Input = document.getElementById("rate1") as HTMLInputElement;
        const rate2Input = document.getElementById("rate2") as HTMLInputElement;
        rate1Input.value = "";
        rate2Input.value = "";
        handleInput({ target: { value: "" } }, 1);
        handleInput({ target: { value: "" } }, 2);
      }
    } else if (currency === 2) {
      selectedCurrency2 = event.target.value;
      if (
        exchangeRates[selectedCurrency1] &&
        exchangeRates[selectedCurrency2]
      ) {
        rate1 = exchangeRates[selectedCurrency1];
        rate2 = exchangeRates[selectedCurrency2];
        const rate1Input = document.getElementById("rate1") as HTMLInputElement;
        const rate2Input = document.getElementById("rate2") as HTMLInputElement;
        rate1Input.value = "";
        rate2Input.value = "";
        handleInput({ target: { value: "" } }, 1);
        handleInput({ target: { value: "" } }, 2);
      }
    }
  }

  function formatPlaceholder(currency: string, amount: number) {
    return `Insert an amount ${amount.toFixed(2)} ${currency}`;
  }

  // Show the exchange rate between the 2 currencies
  let rate1: number | null = null;
  let rate2: number | null = null;

  $: {
    if (exchangeRates[selectedCurrency1] && exchangeRates[selectedCurrency2]) {
      rate1 = exchangeRates[selectedCurrency1];
      rate2 = exchangeRates[selectedCurrency2];
    } else {
      rate1 = null;
      rate2 = null;
    }
  }

  // Convert the amount while writing
  function handleInput(event: any, currency: any) {
    if (currency === 1) {
      const amount = parseFloat(event.target.value);
      if (!isNaN(amount) && rate2 !== null && rate1 !== null) {
        const convertedAmount = (amount * rate2) / rate1;
        const rate2Element = document.getElementById(
          "rate2",
        ) as HTMLInputElement;
        if (rate2Element) {
          rate2Element.value = convertedAmount.toFixed(2);
        }
      }
    } else if (currency === 2) {
      const amount = parseFloat(event.target.value);
      if (!isNaN(amount) && rate2 !== null && rate1 !== null) {
        const convertedAmount = (amount * rate1) / rate2;
        const rate1Element = document.getElementById(
          "rate1",
        ) as HTMLInputElement;
        if (rate1Element) {
          rate1Element.value = convertedAmount.toFixed(2);
        }
      }
    }
    // reset the other input if the input value is empty
    if (event.target.value === "") {
      if (currency === 1) {
        const rate2Element = document.getElementById(
          "rate2",
        ) as HTMLInputElement;
        rate2Element.value = "";
      } else if (currency === 2) {
        const rate1Element = document.getElementById(
          "rate1",
        ) as HTMLInputElement;
        rate1Element.value = "";
      }
    }
  }

  $: {
    const rate1Element = document.getElementById("rate1");
    const rate2Element = document.getElementById("rate2");
    if (rate1Element) {
      rate1Element.addEventListener("input", (event) => handleInput(event, 1));
    }

    if (rate2Element) {
      rate2Element.addEventListener("input", (event) => handleInput(event, 2));
    }
  }
</script>

<main>
  <Header />
  <div class="content">
    <p>
      Insert an amount in one of the fields to convert it into another currency
    </p>
    {#each Object.entries(exchangeRates) as [key, value], index}
      {#if index === 0}
        <div class="input-box">
          <input
            type="number"
            min="0"
            id="rate1"
            placeholder={formatPlaceholder(selectedCurrency1, 100)}
            on:input={(event) => handleInput(event, 1)}
          />
          <select
            id="option1"
            on:change={(event) => handleSelectChange(event, 1)}
          >
            {#each Object.entries(exchangeRates) as [key, value]}
              {#if key === selectedCurrency1}
                <option value={key} selected>{key}</option>
              {:else}
                <option value={key}>{key}</option>
              {/if}
            {/each}
          </select>
        </div>
      {/if}
    {/each}

    {#each Object.entries(exchangeRates) as [key, value], index}
      {#if index === 1}
        <div class="input-box">
          <input
            type="number"
            min="0"
            id="rate2"
            placeholder={formatPlaceholder(selectedCurrency2, 100)}
            on:input={(event) => handleInput(event, 2)}
          />
          <select
            id="option2"
            on:change={(event) => handleSelectChange(event, 2)}
          >
            {#each Object.entries(exchangeRates) as [key, value]}
              {#if key === selectedCurrency2}
                <option value={key} selected>{key}</option>
              {:else}
                <option value={key}>{key}</option>
              {/if}
            {/each}
          </select>
        </div>
      {/if}
    {/each}

    {#if rate1 && rate2}
      <p id="exchangeRate1" class="exchange-rate1">
        100.00 {selectedCurrency1} = {((100 * rate2) / rate1).toFixed(2)}
        {selectedCurrency2}
      </p>
      <p id="exchangeRate2" class="exchange-rate2">
        100.00 {selectedCurrency2} = {((100 * rate1) / rate2).toFixed(2)}
        {selectedCurrency1}
      </p>
    {/if}

    <p class="credits">
      Exchange rates provided by:<br />
      <a href="https://www.exchangerate-api.com/" target="_blank"
        >exchangerate-api.com</a
      >
      <br /><br /><br />Antipin Vladimiro
    </p>
  </div>
</main>
