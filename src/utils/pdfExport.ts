import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { days } from '../constants/timetableConstants';

export const exportToPDF = (selectedClass: string, schedule: any, getTimePeriodsForClass: any) => {
    const doc = new jsPDF('landscape', 'mm', 'a4');
    const timePeriods = getTimePeriodsForClass(selectedClass);

    doc.setProperties({
        title: `${selectedClass} - Weekly Schedule`,
        subject: 'School Timetable',
        author: 'Kinaawa High School'
    });

    doc.setFontSize(18);
    doc.setTextColor(26, 71, 42);
    doc.text('KINAAWA HIGH SCHOOL', 148, 20, { align: 'center' });

    doc.setFontSize(14);
    doc.text('KAWEMPE CAMPUS', 148, 28, { align: 'center' });

    doc.setFontSize(10);
    doc.setTextColor(102, 102, 102);
    doc.text('P.O. Box 9093,', 15, 35);
    doc.text('Kampala-Uganda', 15, 40);
    doc.text('Bombo Road - Kawempe Ttula', 15, 45);

    doc.text('Tel:+256(0)772 431975', 230, 35, { align: 'right' });
    doc.text('+256(0)759 137103', 230, 40, { align: 'right' });

    doc.text('E-mail: kinaawa kawempe@gmail.com', 15, 50);

    doc.setDrawColor(26, 71, 42);
    doc.line(15, 52, 280, 52);

    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`Class ${selectedClass} - Weekly Schedule`, 15, 65);

    const tableData = timePeriods.map(period => {
        return [
            period.time,
            ...days.map(day => {
                const slot = schedule[selectedClass][day][period.id];
                return `${slot.teacher}\n${slot.subject}`;
            })
        ];
    });

    const headers = ['Time/Day', ...days];

    doc.autoTable({
        head: [headers],
        body: tableData,
        startY: 65,
        styles: {
            fontSize: 8,
            cellPadding: 2,
            lineColor: 40,
            lineWidth: 0.1,
            font: 'helvetica'
        },
        headStyles: {
            fillColor: [26, 71, 42],
            textColor: 255,
            fontSize: 14,
        },
        columnStyles: {
            0: { cellWidth: 30 },
            1: { cellWidth: 'auto' }
        },
        alternateRowStyles: {
            fillColor: [245, 245, 245]
        },
        theme: 'grid'
    });

    const pageCount = doc.internal.getNumberOfPages();
    doc.setFontSize(8);
    doc.setTextColor(102, 102, 102);
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        const today = new Date().toLocaleDateString();
        doc.text(`Generated on: ${today}`, 15, doc.internal.pageSize.height - 10);
        doc.text(`Page ${i} of ${pageCount}`, doc.internal.pageSize.width - 20, doc.internal.pageSize.height - 10);
    }

    doc.save(`${selectedClass}_schedule.pdf`);
    alert('PDF exported successfully!');
};