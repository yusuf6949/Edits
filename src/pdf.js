import * as pdfjsLib from 'pdfjs-dist/webpack';

const extractTextFromPDF = async (pdfUrl) => {
  try {
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    let text = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map(item => item.str);
      text += strings.join(' ') + '\n';
    }
    return text;
  } catch (error) {
    console.error('Error extracting text from PDF:', error);
    throw error;
  }
};

