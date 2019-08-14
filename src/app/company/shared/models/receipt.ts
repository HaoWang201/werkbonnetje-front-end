import Project from './project';
import Staff from './staff';

export default class Receipt {
  number: string;
  description: string;
  date: Date;
  projectId: number;
  project?: Project;
  hiredThrough: string;
  place: string;
  address: string;
  city: string;
  staffId: number;
  staff?: Staff;
  startDate: Date;
  endDate: Date;
  status: 'Approved' | 'New' | 'Rejected' | 'Seen';
  costs: any[];
  hours: any[];

  tableAttributes?: {
    expanded: boolean;
    selected: boolean;
  };
}
