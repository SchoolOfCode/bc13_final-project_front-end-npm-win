import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function GroupModal({ setModalInfo, club, hideModal }) {
  return (
    <div className="max-w-lg">
      <li
        key={club.id}
        className="h-[100%] 
      col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-justify tracking-tight bg-white shadow" //keep card size the same
        onClick={setModalInfo}
      >
        <div className="flex flex-1 flex-col p-8">
          <div className="flex flex-row justify-end">
            {/* this is the close button */}
            <button onClick={hideModal} className="fixed w-12 ">
              Close
            </button>
          </div>
          <img
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            src={club.image}
            alt=""
          />
          <h3 className="mt-6 text-sm font-bold text-center text-gray-900">
            {club.club_name}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between ">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{club.tagline}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {club.availability}
              </span>
            </dd>
          </dl>
        </div>
        <div className="p-8">
          <p className=" text-sm text-gray-501">{club.description}</p>
        </div>
        <div className="flex flex-col justify-between py-2 px-8 text-sm text-black font-bold">
          <h3 className="">{club.email}</h3>
          <h3 className="">{`0${club.telephone}`}</h3>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={`mailto:${club.email}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3 mr-3">Email</span>
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`tel:${club.telephone}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <PhoneIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3 mr-3">Call</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
