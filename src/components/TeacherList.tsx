import React from 'react';
import { X } from 'lucide-react';

const TeacherList = ({ teachers, removeTeacher }) => {
    return (
        <div className="teacher-list">
            {teachers.map((teacher, index) => (
                <div key={index} className="teacher-card">
                    <div className="teacher-info">
                        <div className="teacher-name">{teacher.name}</div>
                        <div className="teacher-subject">
                            {teacher.subjects.map(subject => subject.subject).join(', ')}
                        </div>
                        <div className="teacher-classes">
                            Classes: {teacher.subjects.reduce((acc, subject) => {
                                acc.push(...subject.classes);
                                return acc;
                            }, []).join(', ')}
                            {teacher.subjects.some(subject => 
                                subject.classes.some(c => c === 'S5' || c === 'S6')) &&
                                ` (${teacher.subjects.reduce((acc, subject) => {
                                    if (subject.classes.some(c => c === 'S5' || c === 'S6')) {
                                        acc.push(...subject.streams);
                                    }
                                    return acc;
                                }, []).join(', ')})`
                            }
                        </div>
                        <div className="teacher-periods">Available: {teacher.availableDays.join(', ')}</div>
                        <div className="teacher-periods">Periods: {teacher.periodsAssigned}</div>
                    </div>
                    <button
                        onClick={() => removeTeacher(index)}
                        className="remove-button"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            ))}
        </div>
    );
};