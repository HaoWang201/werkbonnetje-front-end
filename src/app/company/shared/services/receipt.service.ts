import { Injectable } from '@angular/core';
import Receipt from '../models/receipt';
import Project from '../models/project';
import Staff from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor() { }

  getAllByCompanyId(): Receipt[] {
    return [
      {
        number: 'WB176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 1,
        project: {
          number: 'U1932147'
        },
        hiredThrough: 'Adfontes Consultancy B.V.',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Chris',
          lastName: 'Zijlstra',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'Approved',
        costs: [],
        hours: []
      },
      {
        number: 'WB176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 2,
        project: {
          number: 'U1932198'
        },
        hiredThrough: 'Loyality Works B.V.',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Nathan',
          lastName: 'Wang',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'New',
        costs: [],
        hours: []
      },
      {
        number: 'wb176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 1,
        project: {
          number: 'U194123'
        },
        hiredThrough: 'Zwart Schuim',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Robin',
          lastName: 'Vos',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'Rejected',
        costs: [],
        hours: []
      },
      {
        number: 'WB176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 1,
        project: {
          number: 'U1932'
        },
        hiredThrough: 'Cruperina V.O.F.',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Sandra',
          lastName: 'Verkerk',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'Seen',
        costs: [],
        hours: []
      },
      {
        number: 'WB176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 1,
        project: {
          number: 'U1932'
        },
        hiredThrough: 'Cruperina V.O.F.',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Sandra',
          lastName: 'Verkerk',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'Seen',
        costs: [],
        hours: []
      },
      {
        number: 'WB176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 1,
        project: {
          number: 'U1932'
        },
        hiredThrough: 'Cruperina V.O.F.',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Sandra',
          lastName: 'Verkerk',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'Seen',
        costs: [],
        hours: []
      },
      {
        number: 'WB176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 1,
        project: {
          number: 'U1932'
        },
        hiredThrough: 'Cruperina V.O.F.',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Sandra',
          lastName: 'Verkerk',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'Seen',
        costs: [],
        hours: []
      },
      {
        number: 'WB176',
        description: 'I’ve done something today so in till little bit of text i can tell the guy i;ve worked for some more details. ',
        date: new Date(),
        projectId: 1,
        project: {
          number: 'U1932'
        },
        hiredThrough: 'Cruperina V.O.F.',
        place: '',
        address: 'Hannieschafstraat 105',
        city: 'S’hertogenbosch',
        staffId: 1,
        staff: {
          firstName: 'Sandra',
          lastName: 'Verkerk',
          phone: '06 45 401 409',
          email: 'hello@Chriszijlstra.nl'
        },
        startDate: new Date(),
        endDate: new Date(),
        status: 'Seen',
        costs: [],
        hours: []
      },
    ];
  }
}
