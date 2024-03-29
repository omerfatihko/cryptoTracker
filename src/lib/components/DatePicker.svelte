<script lang="ts">
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import {
      DateFormatter,
      getLocalTimeZone,
      today
  } from "@internationalized/date";
  import { cn } from "$lib/utils.js";
  import { Button } from "$lib/components/ui/button";
  import * as Popover from "$lib/components/ui/popover";
  import { Calendar as CalendarPrimitive} from "bits-ui";
  import * as Calendar from "$lib/components/ui/calendar";
  import * as Select from "$lib/components/ui/select";

  type $$Props = CalendarPrimitive.Props;
  type $$Events = CalendarPrimitive.Events;

  export let value: $$Props["value"] = undefined;
  export let placeholder: $$Props["placeholder"] = today(getLocalTimeZone());
  
  export let weekdayFormat: $$Props["weekdayFormat"] = "short";

  const monthOptions = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  ].map((month, i) => ({ value: i + 1, label: month}));

  const monthFmt = new DateFormatter("en-US", {
      month: "long"
  });
  
  const yearOptions = Array.from({ length: 20 }, (_, i) => ({
      label: String(new Date().getFullYear() - i),
      value: new Date().getFullYear() - i
  }));

  const df = new DateFormatter("en-US", {
      dateStyle: "long"
  });

  $: defaultYear = placeholder
  ? {
      value: placeholder.year,
      label: String(placeholder.year)
  }
  : undefined;

  $: defaultMonth = placeholder
  ? {
      value: placeholder.month,
      label: monthFmt.format(placeholder.toDate(getLocalTimeZone()))
  }
  : undefined;

  let className: $$Props["class"] = undefined;
  export { className as class};
</script>

<Popover.Root>
  <Popover.Trigger asChild let:builder> 
      <Button 
      variant="outline"
      class={cn(
          "w-[280px] justify-start text-left font-normal",
          !value && "text-muted-foreground"
      )}
      builders={[builder]}>
          <CalendarIcon class="mr-2 h-4 w-4" />
          {value ? df.format(value.toDate(getLocalTimeZone())) : "Pick the date of buy"}
      </Button>
  </Popover.Trigger>
  <Popover.Content class="w auto p-0">
      <CalendarPrimitive.Root
          {weekdayFormat}
          class={cn("rounded-md border p-3", className)}
          {...$$restProps}
          on:keydown
          let:months
          let:weekdays
          bind:value
          bind:placeholder>
          <Calendar.Header> 
              <Calendar.Heading class="flex w-full items-center justify-between gap-2"> 
                  <Select.Root
                      selected={defaultMonth}
                      items={monthOptions}
                      onSelectedChange={(v) => {
                          if (!v || !placeholder) return;
                          if (v.value === placeholder?.month) return;
                          placeholder = placeholder.set({ month: v.value});
                      }}>
                      <Select.Trigger aria-label="Select month" class="w-[60%]"> 
                          <Select.Value placeholder="Select month" />
                      </Select.Trigger>
                      <Select.Content class="max-h-[200px] overflow-y-auto">
                          {#each monthOptions as { value, label }}
                              <Select.Item {value} {label}>
                                  {label}
                              </Select.Item>
                          {/each}
                      </Select.Content>
                  </Select.Root>
                  <Select.Root
                      selected={defaultYear}
                      items = {yearOptions}
                      onSelectedChange={(v) => {
                          if (!v || !placeholder) return;
                          if (v.value === placeholder?.year) return;
                          placeholder = placeholder.set({year: v.value});
                      }}>
                      <Select.Trigger aria-label="Select year" class="w-[40%]"> 
                          <Select.Value placeholder="Select year" />
                      </Select.Trigger>
                      <Select.Content class="max-h-[200px] overflow-y-auto">
                          {#each yearOptions as { value, label }}
                              <Select.Item {value} {label}>
                                  {label}
                              </Select.Item>
                          {/each}
                      </Select.Content>
                  </Select.Root>
              </Calendar.Heading>
          </Calendar.Header>
          <Calendar.Months> 
              {#each months as month}
                  <Calendar.Grid> 
                      <Calendar.GridHead> 
                          <Calendar.GridRow class="flex">
                              {#each weekdays as weekday}
                                  <Calendar.HeadCell> 
                                      {weekday.slice(0, 2)}
                                  </Calendar.HeadCell>
                              {/each}
                          </Calendar.GridRow>
                      </Calendar.GridHead>
                      <Calendar.GridBody> 
                          {#each month.weeks as weekDates}
                              <Calendar.GridRow class="mt-2 w-full"> 
                                  {#each weekDates as date}
                                      <Calendar.Cell {date}>
                                          <Calendar.Day {date} month={month.value} />
                                      </Calendar.Cell>
                                  {/each}
                              </Calendar.GridRow>
                          {/each}
                      </Calendar.GridBody>
                  </Calendar.Grid>
              {/each}
          </Calendar.Months>
      </CalendarPrimitive.Root>
  </Popover.Content>
</Popover.Root>