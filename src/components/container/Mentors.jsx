import React from 'react'
// import { mentorlist } from '../../Data'

const mentorlist = [
    {
      name: 'Аскар Айтуов',
      role: 'DevRel Google for Developers и Google for Startups',
      imageUrl:
        'https://i1.rgstatic.net/ii/profile.image/865981761064963-1583477549936_Q512/Askar-Aituov.jpg',
    },
    {
      name: 'Владимир Попов',
      role: 'PhD-candidate in TechPreneurship',
      imageUrl:
        'https://media.licdn.com/dms/image/C4E03AQGOxo5sCK2xGg/profile-displayphoto-shrink_200_200/0/1572424188600?e=2147483647&v=beta&t=IjWA5I0bRKlwt_Nu0NGVnEMU52xrxs3QPvx18kvUCKg',
    },
    {
      name: 'Мариям Таскинбаева',
      role: 'Обладатель диплома ACCA, IELTS 8,5',
      imageUrl:
        'https://kbtu.edu.kz/images/mariam_task.jpg',
    },
    
   
  ];

const Mentors = () => {
  return (
    <div>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our mentors</h2>
          <p className="mt-9 text-lg leading-8 text-gray-1200">
          We believe in the transformative power of mentorship. Our mentors are dedicated professionals and experts in their respective fields, committed to guiding and inspiring the next generation of learners.

Whether you're a student seeking guidance on your academic journey, exploring career paths, or looking to enhance your skills, our mentors are here to support you. 
          </p>
        </div>
        <ul role="list" className="grid gap-x-20 gap-y-30 sm:grid-cols-2 sm:gap-y-40 xl:col-span-3">
          {mentorlist.map((mentor) => (
            <li key={mentor.name}>
              <div className="flex items-center gap-x-10">
                <img className="h-16 w-16 rounded-full" src={mentor.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{mentor.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{mentor.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Mentors