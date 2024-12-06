import { copyToClipboard } from './utils/clipboard';

export function setupIPTV(element) {
  const iptvUrl = 'https://iptv-emw.pages.dev/IPTV.m3u8';
  
  const copyUrl = async () => {
    const success = await copyToClipboard(iptvUrl);
    const button = element.querySelector('.copy-button');
    button.textContent = success ? '复制成功!' : '复制失败';
    button.classList.add(success ? 'success' : 'error');
    
    setTimeout(() => {
      button.textContent = '复制链接';
      button.classList.remove('success', 'error');
    }, 2000);
  };

  element.innerHTML = `
    <div class="iptv-container">
      <input type="text" value="${iptvUrl}" readonly class="iptv-url" />
      <button class="copy-button">复制链接</button>
    </div>
  `;

  element.querySelector('.copy-button').addEventListener('click', copyUrl);
}