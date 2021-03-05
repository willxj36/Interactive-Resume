import { Job } from '../utils/models';

export const jobs: Job[] = [
    {
        id: 1,
        company: 'Shamrock Foods',
        location: 'Commerce City, CO',
        title: 'CDL Delivery Driver',
        startDate: new Date(2015, 5, 18),
        endDate: null,
        summary: 'Local commercial driver delivering up to 35,000 lb of bulk groceries and supplies to restaurants, schools, hospitals, etc',
        responsibilities: ['Safe and secure transportation of $300,000+ of equipment and goods daily', 'Autonomy to make virtually all decisions when/if circumstances changed suddenly', 'Ensuring compliance with FMCSA regulations regarding cargo, hours, equipment safety, etc', 'Focus on customer satisfaction within the frame of company needs and other considerations (safety, etc)', 'Keep to a constantly changing schedule while handling constantly changing conditions and circumstances']
    },
    {
        id: 2,
        company: "O'Reilly Auto Parts",
        location: 'Monument, CO',
        title: 'Parts Sales',
        startDate: new Date(2015, 1, 20),
        endDate: new Date(2015, 5, 11),
        summary: 'POS operations, assisting customers with vehicle questions, sales',
        responsibilities: ['Assist customers in finding appropriate parts for their situation', 'Push sales of related parts or often-forgotten maintenance items', 'Cashier']
    },
    {
        id: 3,
        company: 'The Plateau Club/Oki Golf',
        location: 'Sammamish, WA',
        title: 'Spray Tech/Crew Foreman',
        startDate: new Date(2014, 4, 1),
        endDate: new Date(2015, 1, 3),
        summary: 'Applying turf maintenance chemicals along with all other turf maintenance duties at a high-end country club; supervisory duties over seasonal employees',
        responsibilities: ['Safe storage and application of large quantities of a variety of chemicals related to golf course maintenance', 'Proper care of all areas of course, both turf and non-turf', 'Supervising seasonal employees and training all general staff on proper techniques for golf course care', 'Occasional transportation of maintenance equipment such as mowers, tractors, etc to other Oki Golf properties']
    },
    {
        id: 4,
        company: "Colorado State University Dining - Ram's Horn",
        location: 'Fort Collins, CO',
        title: 'Student Trainer',
        startDate: new Date(2009, 11, 9),
        endDate: new Date(2013, 12, 20),
        summary: 'Supervised and trained crew of up to ~50 student employees serving meals to up to 2000+ students per shift',
        responsibilities: ['Acquire and maintain ServSafe certification for safe food handling', 'Ensure all student employees performed duties efficiently while following HAACP food safety guidelines', 'Supervise large crews in a fast-paced, high-volume environment', 'Effectively communicate all problems with equipment, employees, inventory, etc to higher management']
    },
    {
        id: 5,
        company: 'Cherry Hills Country Club',
        location: 'Cherry Hills Village, CO',
        title: 'Turf Maintenance Intern',
        startDate: new Date(2013, 5, 20),
        endDate: new Date(2013, 8, 10),
        summary: 'Learn about turf maintenance, crew supervision at a Top 100 Golf Course in US',
        responsibilities: string[]
    }
]