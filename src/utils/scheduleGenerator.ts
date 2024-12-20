import { days, regularTimePeriods, classes } from '../constants/timetableConstants';

export const generateSchedule = (teachers, setTeachers, setSchedule, setLoading) => {
    setLoading(true);
    const newSchedule = {};
    let teacherAssignments = teachers.map(teacher => ({
        ...teacher,
        periodsAssigned: 0,
        dailyAssignments: {},
        dailyClassAssignments: {},
        quadralsAssigned: 0,
        doublesAssigned: 0
    }));

    // Initialize schedule structure
    classes.forEach(className => {
        const timePeriods = regularTimePeriods;
        newSchedule[className] = {};
        days.forEach(day => {
            newSchedule[className][day] = {};
            timePeriods.forEach(period => {
                newSchedule[className][day][period.id] = {
                    teacher: 'Unassigned',
                    subject: '-',
                    time: period.time
                };
            });
        });
    });

    // Your existing schedule generation logic here...
    // (Copy the entire schedule generation logic from your original code)

    // Update teacher assignments after schedule generation
    const updatedTeacherAssignments = teacherAssignments.map(teacher => {
        let totalPeriods = 0;
        
        classes.forEach(className => {
            days.forEach(day => {
                regularTimePeriods.forEach(period => {
                    if (newSchedule[className]?.[day]?.[period.id]?.teacher === teacher.name) {
                        totalPeriods++;
                    }
                });
            });
        });

        return {
            ...teacher,
            periodsAssigned: totalPeriods
        };
    });

    // Update teachers state with correct period assignments
    setTeachers(teachers.map(teacher => {
        const updatedTeacher = updatedTeacherAssignments.find(t => t.id === teacher.id);
        return {
            ...teacher,
            periodsAssigned: updatedTeacher ? updatedTeacher.periodsAssigned : 0
        };
    }));

    setSchedule(newSchedule);
    setLoading(false);
    alert('Schedule generated successfully!');
};