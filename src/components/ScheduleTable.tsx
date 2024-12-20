import React from 'react';
import { Download } from 'lucide-react';
import { days, classes } from '../constants/timetableConstants';
import { exportToPDF } from '../utils/pdfExport';

const ScheduleTable = ({ 
    schedule, 
    selectedClass, 
    setSelectedClass, 
    getTimePeriodsForClass 
}) => {
    return (
        <div className="schedule-card">
            <div className="schedule-header">
                <h2 className="header-title">Weekly Schedule</h2>
                <div className="class-buttons">
                    {classes.map(className => (
                        <button
                            key={className}
                            onClick={() => setSelectedClass(className)}
                            className={`class-button ${
                                selectedClass === className
                                    ? 'class-button-active'
                                    : 'class-button-inactive'
                            }`}
                        >
                            {className}
                        </button>
                    ))}
                </div>
            </div>
            <div className="schedule-table-container">
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th className="table-header">Time/Day</th>
                            {days.map(day => (
                                <th key={day} className="table-header">{day}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {getTimePeriodsForClass(selectedClass).map(period => (
                            <tr key={period.id}>
                                <td className="table-cell time-cell">{period.time}</td>
                                {days.map(day => (
                                    <td key={day} className="table-cell">
                                        {schedule[selectedClass]?.[day]?.[period.id]?.teacher && (
                                            <div className="period-info">
                                                <div className="subject-name">
                                                    {schedule[selectedClass][day][period.id].subject}
                                                </div>
                                                <div className="teacher">
                                                    {schedule[selectedClass][day][period.id].teacher}
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 flex justify-end">
                <button
                    onClick={() => exportToPDF(selectedClass, schedule, getTimePeriodsForClass)}
                    className="add-button"
                >
                    <Download className="w-4 h-4" />
                    Download PDF
                </button>
            </div>
        </div>
    );
};