export default function BaptistAttendanceSystem() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">
          Baptist International Worship Center Tamale
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Church Attendance & Financial Records Management System
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              This web application is designed specifically for managing Sunday church attendance and financial records for Baptist International Worship Center Tamale.
            </p>

            <h3 className="text-xl font-semibold mt-6">Features Included</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Secure login system with admin password</li>
              <li>Password change functionality for the designer/admin</li>
              <li>Sunday attendance recording</li>
              <li>Financial records tracking</li>
              <li>Automatic totals calculation</li>
              <li>Monthly summary reports</li>
              <li>Cloud database support</li>
              <li>Accessible anytime online</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Attendance Fields</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Date</li>
              <li>Adult Males</li>
              <li>Adult Females</li>
              <li>Male Teens</li>
              <li>Female Teens</li>
              <li>Male Children</li>
              <li>Female Children</li>
              <li>Tithe</li>
              <li>First Offering</li>
              <li>Second Offering</li>
              <li>Total Adults</li>
              <li>Total Teens</li>
              <li>Total Tithe & Offerings</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Recommended Technology Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 p-4 rounded-xl border">
                <h4 className="font-bold mb-2">Frontend</h4>
                <p>React + Tailwind CSS</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">
                <h4 className="font-bold mb-2">Backend</h4>
                <p>Firebase Authentication & Firestore Database</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">
                <h4 className="font-bold mb-2">Hosting</h4>
                <p>Vercel or Firebase Hosting</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border">
                <h4 className="font-bold mb-2">Security</h4>
                <p>Password-protected admin access</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-6">Authentication Logic</h3>
            <div className="bg-black text-green-400 p-4 rounded-xl overflow-auto text-sm">
              <pre>{`const DEFAULT_PASSWORD = "AQuriwer";

function login(password) {
  if(password === savedPassword) {
    allowAccess();
  } else {
    denyAccess();
  }
}

function changePassword(newPassword) {
  savedPassword = newPassword;
}`}</pre>
            </div>

            <h3 className="text-xl font-semibold mt-6">Monthly Calculation Logic</h3>
            <div className="bg-black text-green-400 p-4 rounded-xl overflow-auto text-sm">
              <pre>{`monthlyAdults = sum(totalAdults)
monthlyTeens = sum(totalTeens)
monthlyChildren = sum(children)
monthlyTithe = sum(tithe)
monthlyOfferings = sum(firstOffering + secondOffering)
monthlyGrandTotal = monthlyTithe + monthlyOfferings`}</pre>
            </div>

            <h3 className="text-xl font-semibold mt-6">Sample Database Structure</h3>
            <div className="bg-gray-50 p-4 rounded-xl border overflow-auto text-sm">
              <pre>{`{
  date: "2026-05-24",
  adultMales: 45,
  adultFemales: 60,
  maleTeens: 20,
  femaleTeens: 18,
  maleChildren: 25,
  femaleChildren: 30,
  tithe: 5000,
  firstOffering: 2500,
  secondOffering: 1800,
  totalAdults: 105,
  totalTeens: 38,
  totalChildren: 55,
  totalTitheAndOfferings: 9300
}`}</pre>
            </div>

            <h3 className="text-xl font-semibold mt-6">Deployment Instructions</h3>
            <ol className="list-decimal ml-6 space-y-2">
              <li>Create a Firebase project</li>
              <li>Enable Authentication</li>
              <li>Create Firestore Database</li>
              <li>Connect React app to Firebase</li>
              <li>Deploy using Vercel or Firebase Hosting</li>
              <li>Use your admin password to login</li>
            </ol>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Important Security Note</h3>
              <p>
                In a real production system, the password should not be hardcoded directly into the frontend. Instead, it should be securely stored using Firebase Authentication or encrypted backend storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
