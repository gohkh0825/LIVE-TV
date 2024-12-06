export function copyToClipboard(text) {
  try {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    
    // Make it invisible but keep it in the viewport
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.left = '0';
    textarea.style.top = '0';
    
    document.body.appendChild(textarea);
    
    // Select and copy
    textarea.select();
    document.execCommand('copy');
    
    // Clean up
    document.body.removeChild(textarea);
    
    return true;
  } catch (err) {
    console.error('Copy failed:', err);
    return false;
  }
}