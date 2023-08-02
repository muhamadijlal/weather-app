<template>
  <div class="grid bg-gray-300 place-content-center h-screen">
    <div
      class="bg-slate-100 w-[615px] max-w-2xl h-96 rounded-3xl px-10 py-14 shadow-2xl shadow-slate-500"
    >
      <div class="space-y-8 animate-pulse">
        <div class="flex gap-5 justify-between items-center">
          <div class="space-y-2">
            <div class="h-6 w-96 bg-slate-600 rounded-full"></div>
            <div class="h-6 w-40 bg-slate-600 rounded-full"></div>
          </div>

          <div class="rounded-full bg-slate-600 h-28 w-28"></div>
        </div>

        <div class="flex gap-5 justify-between items-center">
          <div class="h-28 w-96 bg-slate-600 rounded-full"></div>

          <table>
            <thead>
              <th colspan="2">
                <div class="h-3 w-full bg-slate-600 rounded-full"></div>
              </th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="h-3 w-20 my-3 bg-slate-600 rounded-full"></div>
                </td>
                <td>
                  <div class="h-3 w-8 my-3 bg-slate-600 rounded-full"></div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="h-3 w-20 bg-slate-600 rounded-full"></div>
                </td>
                <td>
                  <div class="h-3 w-8 bg-slate-600 rounded-full"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <footer class="flex justify-end text-slate-400">
          <div class="h-3 w-24 bg-slate-600 rounded-full"></div>
        </footer>
      </div>
    </div>
  </div>
</template>
