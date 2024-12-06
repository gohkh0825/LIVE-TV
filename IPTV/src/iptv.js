import { copyToClipboard } from './utils/clipboard';

export function setupIPTV(element) {
  const iptvUrl = 'https://iptv-emw.pages.dev/IPTV.m3u';
  
  const copyUrl = () => {
    const success = copyToClipboard(iptvUrl);
    const button = element.querySelector('.copy-button');
    const feedback = element.querySelector('.copy-feedback');
    
    feedback.textContent = success ? '复制成功!' : '复制失败';
    feedback.className = `copy-feedback ${success ? 'success' : 'error'}`;
    button.classList.add(success ? 'success' : 'error');
    
    setTimeout(() => {
      feedback.textContent = '';
      button.classList.remove('success', 'error');
    }, 2000);
  };

  element.innerHTML = `
    <div class="iptv-container">
      <input type="text" value="${iptvUrl}" readonly class="iptv-url" />
      <button class="copy-button">复制链接</button>
      <span class="copy-feedback"></span>
    </div>
  `;

  element.querySelector('.copy-button').addEventListener('click', copyUrl);
}
