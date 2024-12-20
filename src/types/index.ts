export interface Teacher {
    id: number;
    name: string;
    subjects: Subject[];
    availableDays: string[];
    periodsAssigned: number;
  }
  
  export interface Subject {
    subject: string;
    classes: string[];
    streams: string[];
  }
  
  export interface TimePeriod {
    id: number;
    time: string;
  }
  
  export interface Schedule {
    [className: string]: {
      [day: string]: {
        [periodId: number]: {
          teacher: string;
          subject: string;
          time: string;
        };
      };
    };
  }
  
  export interface TeacherAssignment extends Teacher {
    dailyAssignments: { [key: string]: number };
    dailyClassAssignments: { [key: string]: string[] };
    quadralsAssigned: number;
    doublesAssigned: number;
  }