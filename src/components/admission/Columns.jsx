import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export const announcementData = [
    { id: 1, issueby: "Admin Department", announcements: "New HR policy updates released.", date: "01-01-2026" },
    { id: 2, issueby: "Examination Cell", announcements: "Midterm exam schedule published.", date: "02-01-2026" },
    { id: 3, issueby: "Training Department", announcements: "Workshop on React JS announced.", date: "03-01-2026" },
    { id: 4, issueby: "Management", announcements: "Annual meeting scheduled for staff.", date: "04-01-2026" },
    { id: 5, issueby: "IT Department", announcements: "Server maintenance on Sunday.", date: "05-01-2026" },
    { id: 6, issueby: "Accounts Department", announcements: "Fee submission deadline extended.", date: "06-01-2026" },
    { id: 7, issueby: "Placement Cell", announcements: "Campus drive by Tech Solutions Ltd.", date: "07-01-2026" },
    { id: 8, issueby: "Admin Department", announcements: "Office will remain closed on public holiday.", date: "08-01-2026" },
    { id: 9, issueby: "Library", announcements: "New books added to digital section.", date: "09-01-2026" },
    { id: 10, issueby: "Training Department", announcements: "Python advanced batch starts next week.", date: "10-01-2026" },
    { id: 11, issueby: "Examination Cell", announcements: "Admit cards available online.", date: "11-01-2026" },
    { id: 12, issueby: "Management", announcements: "Scholarship program announced.", date: "12-01-2026" },
    { id: 13, issueby: "IT Department", announcements: "New software installation in lab.", date: "13-01-2026" },
    { id: 14, issueby: "Accounts Department", announcements: "Pending dues reminder notice.", date: "14-01-2026" },
    { id: 15, issueby: "Placement Cell", announcements: "Resume building workshop.", date: "15-01-2026" },
    { id: 16, issueby: "Admin Department", announcements: "Updated contact details published.", date: "16-01-2026" },
    { id: 17, issueby: "Library", announcements: "Library timing extended during exams.", date: "17-01-2026" },
    { id: 18, issueby: "Training Department", announcements: "Graphic design crash course launched.", date: "18-01-2026" },
    { id: 19, issueby: "Examination Cell", announcements: "Practical exam dates released.", date: "19-01-2026" },
    { id: 20, issueby: "Management", announcements: "Internal audit scheduled.", date: "20-01-2026" },
    { id: 21, issueby: "IT Department", announcements: "WiFi upgrade completed.", date: "21-01-2026" },
    { id: 22, issueby: "Accounts Department", announcements: "Online payment portal updated.", date: "22-01-2026" },
    { id: 23, issueby: "Placement Cell", announcements: "Interview preparation session.", date: "23-01-2026" },
    { id: 24, issueby: "Admin Department", announcements: "Staff appraisal forms available.", date: "24-01-2026" },
    { id: 25, issueby: "Library", announcements: "E-book access instructions shared.", date: "25-01-2026" },
    { id: 26, issueby: "Training Department", announcements: "Data Science seminar announced.", date: "26-01-2026" },
    { id: 27, issueby: "Examination Cell", announcements: "Result declaration date confirmed.", date: "27-01-2026" },
    { id: 28, issueby: "Management", announcements: "New branch opening ceremony.", date: "28-01-2026" },
    { id: 29, issueby: "IT Department", announcements: "Cybersecurity awareness session.", date: "29-01-2026" },
    { id: 30, issueby: "Accounts Department", announcements: "Revised fee structure notice.", date: "30-01-2026" },
];

export const columns = [
    {
        accessorKey: "id",
        header: ({ column }) => (
            <Button
                className={"bg-orange-400 hover:bg-orange-500 w-full flex justify-between"}

                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                <span>S. No. </span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
    {
        accessorKey: "issueby",
        header: "Issue By",
    },
    {
        accessorKey: "announcements",
        header: "Announcements",
    },
    {
        accessorKey: "date",
        header: ({ column }) => (
            <Button
                className={"bg-orange-400 hover:bg-orange-500 w-full flex justify-between"}

                onClick={() =>
                    column.toggleSorting(column.getIsSorted() === "asc")
                }
            >
                <span>Date </span>
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
    },
]
