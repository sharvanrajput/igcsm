import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


const rtiData = [
  {
    sno: 1,
    clause: "(i)",
    description: "Particulars of the organization, its functions and duties",
  },
  {
    sno: 2,
    clause: "(ii)",
    description: "Powers and duties of its officers and employees",
  },
  {
    sno: 3,
    clause: "(iii)",
    description:
      "Procedure followed in the decision-making process, including channels of supervision and accountability",
  },
  {
    sno: 4,
    clause: "(iv)",
    description: "Norms set by it for the discharge of its functions",
  },
  {
    sno: 5,
    clause: "(v)",
    description:
      "Rules, regulations, instructions, manuals and records used for discharging functions",
  },
  {
    sno: 6,
    clause: "(vi)",
    description:
      "Statement of the categories of documents held by it or under its control",
  },
  {
    sno: 7,
    clause: "(vii)",
    description:
      "Arrangements for consultation with public in policy formulation",
  },
  {
    sno: 8,
    clause: "(viii)",
    description:
      "Statement of boards, councils, committees and whether meetings are public",
  },
  {
    sno: 9,
    clause: "(ix)",
    description: "Directory of its officers and employees",
  },
  {
    sno: 10,
    clause: "(x)",
    description: "Monthly remuneration of officers and employees",
  },
  {
    sno: 11,
    clause: "(xi)",
    description: "Budget allocated to each agency and expenditure reports",
  },
  {
    sno: 12,
    clause: "(xii)",
    description: "Execution of subsidy programmes and beneficiaries",
  },
  {
    sno: 13,
    clause: "(xiii)",
    description: "Recipients of concessions, permits or authorizations",
  },
  {
    sno: 14,
    clause: "(xiv)",
    description: "Information available in electronic form",
  },
  {
    sno: 15,
    clause: "(xv)",
    description: "Facilities available for citizens to obtain information",
  },
  {
    sno: 16,
    clause: "(xvi)",
    description: "Public Information Officers details",
  },
  {
    sno: 17,
    clause: "(xvii)",
    description: "Other prescribed information",
  },
];

const staffDirectory = [
  { sno: 1, name: "Shri. Anil Mittal", designation: "Registrar-cum-Secretary" },
  { sno: 2, name: "Smt. Pratima Tiwari", designation: "Deputy Secretary" },
  { sno: 3, name: "Shri. Ashish Kumar Kushwaha", designation: "Sr. Tech. Asstt." },
  { sno: 4, name: "Smt. Harvinder Kaur", designation: "Accounts Officer" },
  { sno: 5, name: "Shri. Mahesh Arora", designation: "Assistant" },
  { sno: 6, name: "Smt. Parbha Chawla", designation: "Accountant" },
  { sno: 7, name: "Shri. Naresh Kumar", designation: "Assistant" },
  { sno: 8, name: "Shri. Pardeep Kumar", designation: "Upper Division Clerk" },
  { sno: 9, name: "Shri. Pawan Kumar", designation: "Upper Division Clerk" },
  { sno: 10, name: "Shri. Chhote Lal", designation: "Upper Division Clerk" },
  { sno: 11, name: "Smt. Rama Aswal", designation: "Steno." },
  { sno: 12, name: "Shri. Bijender Kumar", designation: "Upper Division Clerk" },
  { sno: 13, name: "Shri. Narendar Kumar", designation: "Upper Division Clerk" },
  { sno: 14, name: "Shri. Mahesh Kumar", designation: "Upper Division Clerk" },
  { sno: 15, name: "Shri. Ravi", designation: "Lower Division Clerk" },
  { sno: 16, name: "Smt. Urmila", designation: "Lower Division Clerk" },
  { sno: 17, name: "Shri. Bhim Singh", designation: "Peon" },
];
const remunerationData = [
  { sno: 1, name: "Shri Anil Mittal", designation: "Registrar-cum-Secretary", salary: "1,39,897.00" },
  { sno: 2, name: "Smt. Pratima Tiwari", designation: "Deputy Secretary", salary: "1,21,209.00" },
  { sno: 3, name: "Shri Ashish Kumar Kushwaha", designation: "Sr. Tech. Asstt.", salary: "83,714.00" },
  { sno: 4, name: "Smt. Harvinder Kaur", designation: "Accounts Officer", salary: "1,02,068.00" },
  { sno: 5, name: "Shri Mahesh Arora", designation: "Assistant", salary: "96,433.00" },
  { sno: 6, name: "Smt. Prabha Rani Chawla", designation: "Accountant", salary: "96,433.00" },
  { sno: 7, name: "Shri Naresh Kumar", designation: "Assistant", salary: "91,120.00" },
  { sno: 8, name: "Shri Pradeep Kumar", designation: "U.D.C.", salary: "77,918.00" },
  { sno: 9, name: "Shri Pawan Kumar", designation: "U.D.C.", salary: "71,800.00" },
  { sno: 10, name: "Shri Chhote Lal", designation: "U.D.C.", salary: "71,800.00" },
  { sno: 11, name: "Smt. Rama Aswal", designation: "Steno", salary: "67,936.00" },
  { sno: 12, name: "Shri Bijendar Kumar", designation: "U.D.C.", salary: "65,199.00" },
  { sno: 13, name: "Shri Narender Kumar", designation: "U.D.C.", salary: "60,047.00" },
  { sno: 14, name: "Shri Mahesh Kumar", designation: "U.D.C.", salary: "60,047.00" },
  { sno: 15, name: "Shri Ravi", designation: "L.D.C.", salary: "64,716.00" },
  { sno: 16, name: "Smt. Urmila", designation: "L.D.C.", salary: "50,548.00" },
  { sno: 17, name: "Shri Bhim Singh", designation: "Peon", salary: "50,548.00" },
];
const staffStrength = [
  { sno: 1, staffType: "Permanent", count: 17 },
  { sno: 2, staffType: "Contractual", count: 22 },
  { sno: 3, staffType: "On Deputation", count: "Nil" },
];


const budgetData = [
  {
    sno: "I",
    majorHead: "Salaries",
    be2022: 441.0,
    re2022: 421.9,
    be2023: 554.5,
  },
  {
    sno: "II",
    majorHead: "Travel Expenses",
    be2022: 895.0,
    re2022: 639.0,
    be2023: 641.0,
  },
  {
    sno: "III",
    majorHead: "Honorarium to Inspectors & members / sitting allowance to members",
    be2022: 142.0,
    re2022: 167.0,
    be2023: 187.0,
  },
  {
    sno: "IV",
    majorHead: "Contingencies (Operational Expenses)",
    be2022: 6746.5,
    re2022: 18750.5,
    be2023: 19101.0,
  },
  {
    sno: "V",
    majorHead: "Proposed Staff",
    be2022: 50.0,
    re2022: 100.0,
    be2023: 100.0,
  },
  {
    sno: "",
    majorHead: "Total",
    be2022: 8274.5,
    re2022: 20078.4,
    be2023: 20583.5,
  },
];

const RtiBody = () => {
  return (
    <section className='py-20'>
      <div className="container">
        <div className="text-center">
          <p className='text-md'>General Information»Information Published In Pursuance of Section 4(1) (B) Of The Right To Information Act, 2005</p>
          <p className='text-sm text-black font-semibold'>INFORMATION PUBLISHED IN PURSUANCE OF SECTION 4(1) (b) OF THE RIGHT TO INFORMATION ACT, 2005</p>
          <p className='underline text-black mt-3'>TABLE OF CONTENTS</p>
        </div>

        <div className='my-10'>
          <Table className={"border rounded-xl"}>
            <TableCaption>RTI Act Section 4(1)(b) Information</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] border">S.No.</TableHead>
                <TableHead className={"border"} >Sub-clause</TableHead>
                <TableHead className={"border"} >Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rtiData.map((item) => (
                <TableRow key={item.sno}>
                  <TableCell className="font-medium py-3 px-2 border ">{item.sno}</TableCell>
                  <TableCell className={"py-3 px-2 border "} >{item.clause}</TableCell>
                  <TableCell className={"py-3 px-2 border "} >{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-5">
          <h2 className='font-bold'>i. Particulars of the Organization, its Functions and Duties  </h2>
          <p className='text-sm!'>The Pharmacy Council of India (PCI) is a statutory body constituted under the Pharmacy Act, 1948.  The Act was passed by the Parliament to make better provisions for the regulation of the profession and practice of pharmacy throughout the country.  </p>
          <h2 className='font-semibold'>The main objectives of the PCI are –</h2>

          <ul className='text-gray-600 text-sm space-y-2'>
            <li>1.      To prescribe minimum standard of education required for qualifying as a pharmacist i.e. framing of Education Regulations prescribing the conditions to be fulfilled by the institutions   seeking   approval   of    the PCI for imparting education in pharmacy.</li>
            <li>2.      To ensure uniform implementation of the educational standards throughout the country.</li>
            <li>3.      To approve the courses of study and examination for pharmacists i.e. approval of the academic training institutions providing  pharmacy courses.</li>
            <li>4.      To withdraw approval, if the approved course of study or an approved examination does not continue to be in conformity with the educational standards prescribed by the PCI.</li>
            <li>5.      To approve qualifications granted outside the territories to  which  the Pharmacy Act   extends  i.e. the  approval  of  foreign qualifications.</li>
            <li>6.      To maintain the Central Register of Pharmacists on the basis of data forwarded by the State Pharmacy Councils.</li>
          </ul>


          <h2 className='font-semibold'>ii.      Powers and Duties of its officers  </h2>
          <h2 className='font-semibold'>Registrar-cum-Secretary</h2>
          <p>The Registrar-cum-Secretary is the administrative head of the PCI secretariat.  He/She acts as the Treasurer of the Council. He/She performs functions to carry out the activities of the Pharmacy Act, 1948 like convening various meetings of the Central Council, Executive Committee, Other committees etc. and implementation of the decisions taken therein.</p>

          <h2 className='font-semibold'>Deputy Secretary and Assistant Secretary </h2>
          <p>They are responsible for inspections of the pharmacy institutions, processing of inspection reports and convening of meetings of the Central Council,the Executive Committee and other committees of the PCI and implementation of the decisions taken therein.</p>

          <h2 className='font-semibold'>iii.     Procedure followed in the decision-making process, including channels of  supervision and accountability  </h2>
          <p>a.   The Central Council  </p>
          <p>      There is a Central Council constituted u/s 3 of the Pharmacy Act, 1948 which consists of the following members namely :-</p>

          <p>“3.    Constitution and Composition of Central Council. —The Central Government shall, as soon as may be, constitute a Central Council consisting of the following members, namely: -</p>
          <p>(a) six members, among whom there shall be at least one teacher of each of the subjects, pharmaceutical chemistry, pharmacy, pharmacology and pharmacognosy elected by the [University Grants Commission] from among persons on the teaching staff of an Indian University or a college affiliated thereto which grants a degree or diploma in pharmacy;
            <br /> (b) six members, of whom at least [four] shall be persons possessing a degree or diploma in, and practising pharmacy or pharmaceutical chemistry, nominated by the Central Government;
            <br /> (c) one member elected from amongst themselves by the members of the Medical Council of India;
            <br /> (d) the Director General, Health Services, ex officio or if he is unable to attend any meeting, a person authorized by him in writing to do so;  [(dd) the Drugs Controller, India, ex officio or if he is unable to attend any meeting, a person authorised by him in writing to do so;]
            <br /> (e) the Director of the Central Drugs Laboratory, ex officio;
            <br />(f) a representative of the University Grants Commission and a representative of the All India Council for Technical Education;
            <br /> (g) one member to represent each State elected [from amongst themselves] by the members of each State Council, who shall be a registered pharmacist;
            <br />(h) one member to represent each State nominated by [the] State Government, who shall be a registered pharmacist:
            [Provided that for five years from the date on which the Pharmacy (Amendment) Act, 1976, comes into force the Government of each Union territory shall, instead of electing a member under clause (g) nominate one member, being a person eligible for registration under section 31, to represent that territory.] ”</p>

          <p>The Central Council is responsible for the regulation of the profession and practice of pharmacy throughout the country.  The composition of the present Central Council is available on PCI website “www.pci.nic.in”.</p>



          <h2 className='font-semibold'>b.   The Executive Committee</h2>
          <p>    The Executive Committee considers the inspection reports relating to the course of study and examination in pharmacy and policy issues for submission to the Central Council.  This committee also considers and reports on any subject referred to it by the Central Council or by the President.  The composition of the present Executive Committee is available on PCI website “www.pci.nic.in”.</p>
          <h2 className='font-semibold'>c.   The Other Committees</h2>
          <p> There are the following other committees constituted by the Central Council from amongst its members for general/special purposes –</p>

          <ul className='text-gray-600 text-sm space-y-2'>
            <li>1.   Education Regulations Committee – The committee has been rendering necessary clarifications and revision of the Education Regulations and advising on the educational policies.</li>
            <li>2.   Law Committee – The Law Committee is formed to give expert opinion in matters inviting legal interpretation of the Pharmacy Act and regulations of the Pharmacy Council of India made thereunder. </li>
            <li>3.   Professional Pharmacy and Public Relation Committee – The PP & PRC Committee is formed to look into the professional issues relating to Pharmacy Profession.</li>
            <li>4.   Finance Committee – The Finance Committee is formed to look into the financial matter.</li>
          </ul>

          <p>      These committees can also co-opt such persons who are not the members of the Central Council.</p>


          <h2 className='font-semibold'>iv.    Norms set by it for the discharge of its functions</h2>

          <p>The functions are regulated by the Pharmacy Act, 1948, the Education Regulations, 1991, the Pharm.D. Regulations, 2008.  All the Central Govt. rules and regulations relating to establishment, administration and financial matters are applicable to the PCI.  In addition, the Rules,  Regulations  and  by  laws  framed  by  the  Central Council, Executive Committee, Finance  Committee,  Law Committee, Education Regulation Committee and Professional Pharmacy and Public Relation Committee etc. are  also  significant  policy framework  for  the  discharge  of  its  functions.</p>

          <h2 className='font-semibold'>v.      The  Rules,  Regulations,  Instructions,  Manuals  and  Records  held  by  the  it  or  under  its control or used by its employees for discharging its functions </h2>


          <ul className='text-gray-600 text-sm space-y-2'>
            <li>a.  The Pharmacy Act, 1948.</li>
            <li>b.   The Education Regulations, 1991.</li>
            <li>c.   The Pharm.D. Regulations, 2008.</li>
            <li>d.   SIF-A, SIF-B, SIF-C and SIF-D</li>
            <li>e.   Pharmacy Practice Regulations, 2015.</li>
            <li>f.   Bachelor of Pharmacy (Practice) Regulations ,2014.</li>
            <li>g.   The Master of Pharmacy (M.Pharm)Course Regulations ,2014.</li>
            <li>h.   Minimum Qualification for Teachers in Pharmacy Institutions Regulations ,2014.</li>
            <li>i.   Staff Declaration Form (SDF).</li>
            <li>j.   Inspectors’ Hand Book</li>
            <li>k.   PDF guidelines.</li>
            <li>l.   Migration Policy.</li>
            <li>m.    Good Standing Certificate.</li>
            <li>n.    Central Register of Pharmacists maintained on the basis of data forwarded by the State Pharmacy Councils.</li>
            <li>o.   Central Govt. Rules and Regulations relating to establishment, administration and financial matters.</li>
          </ul>


          <p>vi.     Statement of the categories of documents that are held by it or under its control</p>


          <ul className='text-gray-600 text-sm space-y-2'>
            <li>a.   Act, Rules and Regulations. </li>
            <li>b.  Annual Accounts Reports. </li>
            <li>c.   All  records  relating  to  the  operations  of  this  Council reg. SIF, Inspection Reports, Office Notes, Minutes of the meeting, Notifications regarding approval/dis-approval of pharmacy courses of study and examination.</li>
          </ul>


          <h2 className='font-semibold'>vii.    The particulars of any arrangement that exist  for consultation with, or representation by, the  members  of  the  public  in  relation  to  the  formulation  of  its  policy  or  implementation thereof</h2>

          <p>1.   All policy decisions on technical matters are taken by the Central Council which comprises of the representatives from the Teaching Faculty, Central Govt., MCI, DGHS, DCG(I), Director, CDL, UGC, AICTE, States/UTs, State Pharmacy Councils.</p>
          <p>2.   For any Regulation framed u/s 10 of the Pharmacy Act, 1948, due procedure u/s 10(3) of the Pharmacy Act, 1948 is followed by consulting the State Govts.</p>

          <h2 className='font-semibold'>viii.  Statement  of  Boards,  Councils,  Committees  or other  bodies  consisting  of  two  or  more persons  constituted as  its  part   or for  the purpose of its advice,  and as to whether meetings of  those  boards,  councils,  committees  and  other  bodies  are  open  to  the  public,  or  the minutes of such meetings are accessible for public</h2>


          <ul className='text-gray-600 text-sm space-y-2'>
            <li>a.   The details and composition of the Central Council and the Committees are shown in (iii) above.</li>
            <li>b.   Important decisions taken in the meetings are uploaded on the PCI website “www.pci.nic.in”.</li>
          </ul>

          <h2 className='font-semibold'>ix.    Directory of its officers and employees   </h2>
          <p>The names and designation of the officers and employees of the PCI are given   below –</p>


          <div className='my-10'>
            <Table className={"border rounded-xl"}>

              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] border">S.No.</TableHead>
                  <TableHead className={"border"} >Name</TableHead>
                  <TableHead className={"border"} >Designation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffDirectory.map((item) => (
                  <TableRow key={item.sno}>
                    <TableCell className="font-medium py-3 px-2 border ">{item.sno}</TableCell>
                    <TableCell className={"py-3 px-2 border "} >{item.name}</TableCell>
                    <TableCell className={"py-3 px-2 border "} >{item.designation}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>


          <h2 className='font-semibold'>x.      Monthly remuneration received by each of its officers and employees, including the system of compensation as provided in its regulations</h2>
          <p>The monthly remuneration received by the officers and employees of the PCI are as given below –</p>


          <div className='my-10'>
            <Table className={"border rounded-xl"}>

              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] border">S.No.</TableHead>
                  <TableHead className={"border"} >Name</TableHead>
                  <TableHead className={"border"} >Designation</TableHead>
                  <TableHead className={"border"} >Monthly Remuneration (Amount in rupees)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {remunerationData.map((item) => (
                  <TableRow key={item.sno}>
                    <TableCell className="font-medium py-3 px-2 border ">{item.sno}</TableCell>
                    <TableCell className={"py-3 px-2 border "} >{item.name}</TableCell>
                    <TableCell className={"py-3 px-2 border "} >{item.designation}</TableCell>
                    <TableCell className={"py-3 px-2 border "} >{item.salary}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="text-center">
            <p>The detail of total staff : </p>
          </div>

          <div className='my-10'>
            <Table className={"border rounded-xl"}>

              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] border">S.No.</TableHead>
                  <TableHead className={"border"} >Staff</TableHead>
                  <TableHead className={"border"} >No. of Staff Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staffStrength.map((item) => (
                  <TableRow key={item.sno}>
                    <TableCell className="font-medium py-3 px-2 border ">{item.sno}</TableCell>
                    <TableCell className={"py-3 px-2 border "} >{item.staffType}</TableCell>
                    <TableCell className={"py-3 px-2 border "} >{item.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>


          <h2 className='font-semibold'>xi.     Budget  allocated  to  each  of   its  agency,  indicating  the  particulars  of  all  plans,  proposed expenditure and reports on disbursements made</h2>
          <p>   The  Annual  Budget  and  Annual  Accounts  are  finalized  with  the  approval  of  Finance Committee and all  financial  accounts  are  audited by  the office  of  the  Comptroller and Auditor General of India.  A statement showing the Budget Estimates and Revised Estimates for the financial year 2022-2023 and the proposed Budget Estimates for 2023-2024 is as given below –</p>


          <div className="my-10">
            <Table className={"border rounded-xl"}>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] border">S.No.</TableHead>
                  <TableHead className="border">Major Head</TableHead>
                  <TableHead className="border">BE 2022-23</TableHead>
                  <TableHead className="border">RE 2022-23</TableHead>
                  <TableHead className="border">BE 2023-24</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {budgetData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium py-3 px-2 border">
                      {item.sno}
                    </TableCell>

                    <TableCell className="py-3 px-2 border">
                      {item.majorHead}
                    </TableCell>

                    <TableCell className="py-3 px-2 border">
                      {item.be2022.toLocaleString("en-IN")}
                    </TableCell>

                    <TableCell className="py-3 px-2 border">
                      {item.re2022.toLocaleString("en-IN")}
                    </TableCell>

                    <TableCell className="py-3 px-2 border">
                      {item.be2023.toLocaleString("en-IN")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>


          <h2 className='font-semibold'>xii.    Manner  of  execution  of  subsidy  programs,  including  the  amounts  allocated  and  the details of beneficiaries  of such programmes</h2>
          <p>The PCI does not operate any subsidy programmes  </p>


          <h2 className='font-semibold'>xiii.   Particulars of recipients of concessions, permits or authorizations granted by it</h2>

          <p>1.   A list of Pharmacy institutions which have been permitted to conduct course/approved under section 12 of the Pharmacy Act, 1948 is available on the PCI website “www.pci.nic.in”. </p>
          <p>2.   There is no recipient of concessions.</p>


          <h2 className='font-semibold'>xiv.   Details in respect of the information available to or held by it reduced in an electronic form</h2>
          <p>All  official  information  is  accumulated  by  the  concerned  Sections  in  files  and documents.  However,  information  about  functions  and  activities  are  available  on  the PCI website “www.pci.nic.in”. </p>

          <h2 className='font-semibold'>xv.    Particulars  of  facilities  available  to  citizens  for  obtaining  information,  including  the working hours of a library or reading room, if maintained for public use</h2>
          <p>The  PCI office remains  open  for  public  dealing  on  all  working days.   Office of  the Council is open  from 9.30  A.M.  to  6.00 P.M. Public dealing hours  are from 3.00 to 5.00 P.M. on all working days with  a  lunch  break  from  1.30  P.M.  to  2.00 P.M.  Office  of  the  Council remains  closed  on  Saturdays,  Sundays  and  other  declared  Holidays.</p>

          <h2 className='font-semibold'>xvi.    Names, designations and other particulars of the Public Information Officers</h2>

          <h2 className='font-semibold'>
            CENTRAL PUBLIC INFORMATION OFFICER
          </h2>
          <p className='text-sm!' >
            Smt. Pratima Tiwari, Deputy Secretary <br />
            Pharmacy Council of India <br />
            NBCC Centre, 3rd Floor, <br />
            Plot No.2, Community Centre, <br />
            Maa Anandamai Marg, <br />
            Okhla Phase - I <br />
            Landmark - (Near Hotel Crowne Plaza) <br />
            New Delhi - 110 020 <br />
            011-61299900   (O) <br />
            E.Mail :  registrar@pci.nic.in <br />
          </p>
          <h2 className='font-semibold'>
            CENTRAL ASSISTANT PUBLIC INFORMATION OFFICER
          </h2>
          <p className='text-sm!' >
            Shri Ashish Kushwaha, STA <br />
            Pharmacy Council of India <br />
            NBCC Centre, 3rd Floor, <br />
            Plot No.2, Community Centre,<br />
            Maa Anandamai Marg,<br />
            Okhla Phase - I<br />
            Landmark - (Near Hotel Crowne Plaza)<br />
            New Delhi - 110 020<br />
            011-61299900   (O)<br />
            E.Mail :  registrar@pci.nic.in<br />
          </p>
          <h2 className='font-semibold'>
            APPELLATE AUTHORITY
          </h2>
          <p className='text-sm!' >
            Shri Anil Mittal,Registrar-cum-Secretary <br />
            Pharmacy Council of India <br />
            NBCC Centre, 3rd Floor, <br />
            Plot No.2, Community Centre, <br />
            Maa Anandamai Marg, <br />
            Okhla Phase - I <br />
            Landmark - (Near Hotel Crowne Plaza) <br />
            New Delhi - 110 020 <br />
            011-61299900   (O) <br />
            E.Mail :  registrar@pci.nic.in <br />
          </p>

          <h2 className='font-semibold'>
            xvii.  Such other information  as  may  be  prescribed
          </h2>
          <p>All  information  relating  to  the  procedures  of  study of applications, inspections, approval/dis-approval of course of study and examination in pharmacy  etc. and  important decisions for students/institution is  also  available  in  PCI website “www.pci.nic.in”.   </p>

          <h2 className='font-semibold'>Information Pertaining to Application Fee and Other Charges</h2>
          <p>The  person  seeking  information  may  apply  on  a  plain  paper  giving  particulars  of information being sought and his/her correct address for communication. </p>
          <p>-           A  request  for  obtaining  information  under  sub-section  (1)  of  section  6  shall  be accompanied  by  an  application  fee  of  rupees  ten  by  way  of  cash  against  proper receipt  or  by demand  draft or bankers  cheque  or  Indian  Postal  Order payable to the Pharmacy Council of India, New Delhi.</p>
          <p>-           For  providing  the  information  under  sub-section  (1)  of  section  7,  the  fee  shall  be charged  by  way  of  cash  against  proper  receipt  or  by  demand  draft  or  bankers cheque  or  Indian  Post al  Order  payable  to  the  Pharmacy Council of India, New Delhi, at the following rates -</p>


          <p>(a) rupees two for each page (in A4 or A3 size paper) created or copied;  </p>
          <p>(b) actual  charges or cost price of a copy in larger size paper;  </p>
          <p>(c) actual cost or price for samples or models; and  </p>
          <p>(d)  for  inspection  of  records,  no  fee  for  the  first  hour;  and  a  fee  of  rupees  five  for each subsequent hour (or fraction thereof.) </p>

          <p>For  providing  the  information  under  sub-section  (5)  of  section  7,  the  fee  shall  be charged  by  way  of  cash  against  proper  receipt  or  by  demand  draft  or  bankers cheque  or  Indian  Post al  Order  payable  to  the  Pharmacy Council of India, New Delhi at the following rates:- </p>
          <p>(a)  for information provided in  diskette or floppy rupees fifty per diskette or floppy;
            and
            (b) for  information  provided  in  printed  form  at  the  price  fixed  for  such  publication or rupees two per page of photocopy for extracts from the publications. </p>

        </div>
      </div>
    </section>
  )
}

export default RtiBody