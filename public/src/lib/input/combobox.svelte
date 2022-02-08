<script>
  let open = false;
  let searchTerm = "";

  export let options = [];

  const handleKeydown = ({ keyCode }) => {
    if (keyCode !== 38 && keyCode !== 40) return;
    console.log(options);
  };

  $: filteredList = options.filter(
    (item) => item.value.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
</script>

<div class="relative">
  <button
    type="button"
    on:click={() => (open = !open)}
    aria-expanded={open}
    aria-haspopup="listbox"
    class="focus:shadow-outline-blue relative z-0 w-full cursor-default rounded-md bg-white text-left transition duration-150 ease-in-out focus:border-blue-300 focus:outline-none sm:text-sm sm:leading-5"
  >
    <input
      x-ref="search"
      x-show="open"
      x-model="search"
      keydown.enter.stop.prevent="selectOption()"
      keydown.arrow-up.prevent="focusPreviousOption()"
      keydown.arrow-down.prevent="focusNextOption()"
      on:keydown={handleKeydown}
      bind:value={searchTerm}
      type="text"
      class="h-full w-full focus:outline-none"
    />

    <span
      class="pointer-events-none absolute inset-y-0 right-0 -top-3 flex items-center pr-2"
    >
      <svg
        class="h-5 w-5 text-gray-400"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>

  {#if open}
    <div
      x-show="open"
      x-transition:leave="transition ease-in duration-100"
      x-transition:leave-start="opacity-100"
      x-transition:leave-end="opacity-0"
      x-cloak
      class="absolute z-10 w-full rounded-md bg-white shadow-lg"
    >
      <ul
        x-ref="listbox"
        keydown.enter.stop.prevent="selectOption()"
        keydown.arrow-up.prevent="focusPreviousOption()"
        keydown.arrow-down.prevent="focusNextOption()"
        role="listbox"
        :aria-activedescendant="focusedOptionIndex ? name + 'Option' + focusedOptionIndex : null"
        tabindex="-1"
        class="shadow-xs max-h-60 overflow-auto rounded-md text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
      >
        {#each filteredList as item}
          <li
            class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-300 hover:text-white"
          >
            <span
              x-text="Object.values(options)[index]"
              :class="( 'font-semibold': index === focusedOptionIndex, 'font-normal': index !== focusedOptionIndex )"
              class="block truncate font-normal"
            >
              {item.value}
            </span>
            <span
              x-show="key === value"
              :class="( 'text-white': index === focusedOptionIndex, 'text-indigo-600': index !== focusedOptionIndex )"
              class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
            >
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </li>
        {/each}
        {#if filteredList.length === 0}
          <div
            x-show="! Object.keys(options).length"
            x-text="emptyOptionsMessage"
            class="cursor-default select-none px-3 py-2 text-gray-900"
          >
            No Results
          </div>
        {/if}
      </ul>
    </div>
  {/if}
</div>

<!-- <script>
      function select(config) {
          return {
              data: config.data,

              emptyOptionsMessage: config.emptyOptionsMessage ?? 'No results match your search.',

              focusedOptionIndex: null,

              name: config.name,

              open: false,

              options: {},

              placeholder: config.placeholder ?? 'Select an option',

              search: '',

              value: config.value,

              closeListbox: function () {
                  this.open = false

                  this.focusedOptionIndex = null

                  this.search = ''
              },

              focusNextOption: function () {
                  if (this.focusedOptionIndex === null) return this.focusedOptionIndex = Object.keys(this.options).length - 1

                  if (this.focusedOptionIndex + 1 >= Object.keys(this.options).length) return

                  this.focusedOptionIndex++

                  this.$refs.listbox.children[this.focusedOptionIndex].scrollIntoView({
                      block: "center",
                  })
              },

              focusPreviousOption: function () {
                  if (this.focusedOptionIndex === null) return this.focusedOptionIndex = 0

                  if (this.focusedOptionIndex <= 0) return

                  this.focusedOptionIndex--

                  this.$refs.listbox.children[this.focusedOptionIndex].scrollIntoView({
                      block: "center",
                  })
              },

              init: function () {
                  this.options = this.data

                  if (!(this.value in this.options)) this.value = null

                  this.$watch('search', ((value) => {
                      if (!this.open || !value) return this.options = this.data

                      this.options = Object.keys(this.data)
                          .filter((key) => this.data[key].toLowerCase().includes(value.toLowerCase()))
                          .reduce((options, key) => {
                              options[key] = this.data[key]
                              return options
                          }, {})
                  }))
              },

              selectOption: function () {
                  if (!this.open) return this.toggleListboxVisibility()

                  this.value = Object.keys(this.options)[this.focusedOptionIndex]

                  this.closeListbox()
              },

              toggleListboxVisibility: function () {
                  if (this.open) return this.closeListbox()

                  this.focusedOptionIndex = Object.keys(this.options).indexOf(this.value)

                  if (this.focusedOptionIndex < 0) this.focusedOptionIndex = 0

                  this.open = true

                  this.$nextTick(() => {
                      this.$refs.search.focus()

                      this.$refs.listbox.children[this.focusedOptionIndex].scrollIntoView({
                          block: "center"
                      })
                  })
              },
          }
      }
  </script> -->
