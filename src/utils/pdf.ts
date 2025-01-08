// utils/pdf.ts
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "@/components/CVDocument";
import type { CVData } from "@/components/CVDocument";

interface PDFProps {
  formData: CVData;
}

// Component untuk preview PDF
export const PDFPreview = ({ formData }: PDFProps) => (
  <PDFViewer width="100%" height="800px">
    <CVDocument formData={formData} />
  </PDFViewer>
);

// Component untuk download PDF
export const DownloadPDF = ({ formData }: PDFProps) => (
  <PDFDownloadLink
    document={<CVDocument formData={formData} />}
    fileName={`${formData.name.toLowerCase().replace(/\s+/g, "-")}-cv.pdf`}
  >
    {({ loading, error }) =>
      loading ? "Generating PDF..." : error ? "Error!" : "Download PDF"
    }
  </PDFDownloadLink>
);

// Helper function untuk generate PDF blob (opsional)
export const generatePDFBlob = async (formData: CVData) => {
  const { pdf } = await import("@react-pdf/renderer");
  const blob = await pdf(<CVDocument formData={formData} />).toBlob();
  return blob;
};
