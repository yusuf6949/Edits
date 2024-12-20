import React from 'react';
import { Plus, X } from 'lucide-react';
import { subjects, days } from '../constants/timetableConstants';

const TeacherForm = ({ 
    newTeacher, 
    setNewTeacher, 
    selectedDays, 
    handleDayToggle, 
    handleSubjectChange,
    addSubject,
    removeSubject,
    addTeacher 
}) => {
    return (
        <div className="input-container">
            <div className="input-row">
                <div className="input-group">
                    <label htmlFor="teacherName">Teacher Name</label>
                    <input
                        type="text"
                        id="teacherName"
                        placeholder="Teacher Name"
                        value={newTeacher.name}
                        onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
                        className="input-field"
                    />
                </div>
                {newTeacher.subjects.map((subject, index) => (
                    <div key={index} className="subject-entry">
                        <div className="input-group">
                            <label htmlFor={`subject-${index}`}>Subject</label>
                            <select
                                id={`subject-${index}`}
                                value={subject.subject}
                                onChange={(e) => handleSubjectChange(index, 'subject', e.target.value)}
                                className="input-field"
                            >
                                <option value="">Select Subject</option>
                                {subjects.map(subject => (
                                    <option key={subject} value={subject}>{subject}</option>
                                ))}
                            </select>
                        </div>
                        {/* Rest of your form JSX */}
                    </div>
                ))}
                <button onClick={addSubject} className="add-subject-button">
                    <Plus className="w-4 h-4" />
                    Add Subject
                </button>
                <div className="days-toggle-container">
                    {days.map(day => (
                        <button
                            key={day}
                            onClick={() => handleDayToggle(day)}
                            className={`day-toggle ${selectedDays.includes(day) ? 'day-selected' : ''}`}
                        >
                            {day.substring(0, 3)}
                        </button>
                    ))}
                </div>
                <button
                    onClick={addTeacher}
                    disabled={
                        !newTeacher.name ||
                        newTeacher.subjects.some(subject => !subject.subject) ||
                        selectedDays.length === 0 ||
                        newTeacher.subjects.some(subject => 
                            subject.classes.some(c => c === 'S5' || c === 'S6') && 
                            subject.streams.length === 0
                        )
                    }
                    className="add-button"
                >
                    <Plus className="w-4 h-4" />
                    Add Teacher
                </button>
            </div>
        </div>
    );
};