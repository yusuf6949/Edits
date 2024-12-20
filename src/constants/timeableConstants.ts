export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English',
    'History', 'Geography', 'P.E', 'ICT', 'ENT', 'Arabic',
    'Kiswahili', 'Luganda', 'Literature', 'ART', 'Theology', 'General Paper', 
    'Economics', 'SubMath', 'Islam', 'Divinity', 'Agriculture', 'CRE'
];

export const regularTimePeriods = [
    { id: 1, time: '7:20 AM - 8:40 AM' },
    { id: 2, time: '8:40 AM - 10:00 AM' },
    { id: 3, time: '10:20 AM - 11:40 AM' },
    { id: 4, time: '11:40 AM - 1:00 PM' },
    { id: 5, time: '2:00 PM - 3:20 PM' },
    { id: 6, time: '3:20 PM - 4:40 PM' }
];

export const classes = [
    ...['S1', 'S2'].flatMap(level => ['A', 'B', 'C'].map(stream => `${level}${stream}`)),
    ...['S3', 'S4'].flatMap(level => ['A', 'B', 'C'].map(stream => `${level}${stream}`)),
    ...['S5', 'S6'].flatMap(level => ['A', 'B'].map(stream => `${level}${stream}`))
];