export function setupIPTV(element) {
  const iptvUrl = 'https://iptv-emw.pages.dev/IPTV.m3u';
  
  element.innerHTML = `
    <div class="iptv-container">
      <div class="iptv-header">IPTV 链接</div>
      <div class="iptv-url-container">
        <a href="${iptvUrl}" class="iptv-url" target="_blank">${iptvUrl}</a>
      </div>
      <div class="iptv-instructions">点击链接直接访问或长按选择复制</div>
    </div>
  `;
}
