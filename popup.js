document.getElementById('generateCSV').addEventListener('click', async () => {
  const tabs = await chrome.tabs.query({ currentWindow: true });

  let csvContent = 'URL\n';

  tabs.forEach((tab) => {
    csvContent += `${tab.url}\n`;
  });

  document.getElementById('csvOutput').textContent = csvContent;
});
