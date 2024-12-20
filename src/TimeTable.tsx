import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import TeacherForm from './components/TeacherForm';
import TeacherList from './components/TeacherList';
import ScheduleTable from './components/ScheduleTable';
import { generateSchedule } from './utils/scheduleGenerator';
import { regularTimePeriods } from './constants/timetableConstants';
import './TimeTable.css';

const TimeTableScheduler = () => {
    const [teachers, setTeachers] = useState([]);
    const [newTeacher, setNewTeacher] = useState({
        name: '',
        subjects: [{ subject: '', classes: [], streams: [] }],
        availableDays: [],
    });
    const [schedule, setSchedule] = useState({});
    const [selectedClass, setSelectedClass] = useState('S5A');
    const [selectedDays, setSelectedDays] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedTeachers = localStorage.getItem('schoolTeachers');
        if (savedTeachers) {
            setTeachers(JSON.parse(savedTeachers));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('schoolTeachers', JSON.stringify(teachers));
    }, [teachers]);

    const getTimePeriodsForClass = (className) => {
        return regularTimePeriods;
    };

    const handleDayToggle = (day) => {
        setSelectedDays(prevDays => {
            if (prevDays.includes(day)) {
                return prevDays.filter(d => d !== day);
            } else {
                return [...prevDays, day];
            }
        });
    };

    const addSubject = () => {
        setNewTeacher(prevTeacher => ({
            ...prevTeacher,
            subjects: [...prevTeacher.subjects, { subject: '', classes: [], streams: [] }]
        }));
    };

    const removeSubject = (index) => {
        setNewTeacher(prevTeacher => {
            const newSubjects = [...prevTeacher.subjects];
            newSubjects.splice(index, 1);
            return { ...prevTeacher, subjects: newSubjects };
        });
    };

    const handleSubjectChange = (index, field, value) => {
        setNewTeacher(prevTeacher => {
            const newSubjects = prevTeacher.subjects.map((subject, i) => {
                if (i === index) {
                    return { ...subject, [field]: value };
                }
                return subject;
            });
            return { ...prevTeacher, subjects: newSubjects };
        });
    };

    const addTeacher = () => {
        if (!newTeacher.name) {
            alert('Please enter a teacher name.');
            return;
        }
        if (newTeacher.subjects.some(subject => !subject.subject)) {
            alert('Please select a subject for each entry.');
            return;
        }
        if (selectedDays.length === 0) {
            alert('Please select at least one available day.');
            return;
        }

        const existingTeacher = teachers.find(teacher => teacher.name === newTeacher.name);
        if (existingTeacher) {
            setTeachers(teachers.map(teacher => {
                if (teacher.name === newTeacher.name) {
                    return {
                        ...teacher,
                        subjects: [...teacher.subjects, ...newTeacher.subjects],
                        availableDays: [...new Set([...teacher.availableDays, ...selectedDays])]
                    };
                }
                return teacher;
            }));
        } else {
            setTeachers([
                ...teachers,
                {
                    ...newTeacher,
                    availableDays: [...selectedDays],
                    periodsAssigned: 0,
                    id: teachers.length + 1
                }
            ]);
        }

        setNewTeacher({
            name: '',
            subjects: [{ subject: '', classes: [], streams: [] }],
            availableDays: []
        });
        setSelectedDays([]);
    };

    const removeTeacher = (index) => {
        const updatedTeachers = teachers.filter((_, i) => i !== index);
        setTeachers(updatedTeachers);
    };

    return (
        <div className="timetable-container">
            <div className="management-card">
                <div className="management-header">
                    <div className="header-content">
                        <h2 className="header-title">Teacher Management (Total: {teachers.length})</h2>
                        <button
                            onClick={() => {
                                if (window.confirm('Are you sure about clearing all teachers?')) {
                                    setTeachers([]);
                                    localStorage.removeItem('schoolTeachers');
                                }
                            }}
                            className="clear-button"
                        >
                            Clear All Teachers
                        </button>
                    </div>
                </div>

                <TeacherForm
                    newTeacher={newTeacher}
                    setNewTeacher={setNewTeacher}
                    selectedDays={selectedDays}
                    handleDayToggle={handleDayToggle}
                    handleSubjectChange={handleSubjectChange}
                    addSubject={addSubject}
                    removeSubject={removeSubject}
                    addTeacher={addTeacher}
                />

                <TeacherList
                    teachers={teachers}
                    removeTeacher={removeTeacher}
                />

                {teachers.length > 0 && (
                    <button
                        onClick={() => generateSchedule(teachers, setTeachers, setSchedule, setLoading)}
                        className="generate-button"
                    >
                        Generate Weekly Schedule
                    </button>
                )}
            </div>

            {Object.keys(schedule).length > 0 && (
                <ScheduleTable
                    schedule={schedule}
                    selectedClass={selectedClass}
                    setSelectedClass={setSelectedClass}
                    getTimePeriodsForClass={getTimePeriodsForClass}
                />
            )}
        </div>
    );
};

export default TimeTableScheduler;