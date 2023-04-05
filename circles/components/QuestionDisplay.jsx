export default function QuestionDisplay() {
  return (
    <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8  ">
      <h2 className="mb-32 text-4xl font-bold leading-none text-center sm:text-6xl">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-gray-700 text-xl">
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-5">How do I get started?</h3>
          <p className="md:pl-0 md:col-span-7 text-lg">
            Your social prescriber would have sent you an email with a unique
            PIN you can use to sign in. Your Link Worker will be in touch with
            more details.
          </p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-5">
            How do I join a group?
          </h3>
          <p className="md:pl-0 md:col-span-7 text-lg ">
            To join a group, navigate your to the groups page and get in touch
            with the organisers directly, via email or phone.
          </p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-5">
            How can I cancel my attendance to an event?
          </h3>
          <p className="md:pl-0 md:col-span-7 text-lg">
            If for whatever reason you are unable to attend an event that you
            are booked in for, you can cancel at any time by getting in touch
            with the group or organisation. Most events are drop-in only so you
            may not need to do this.
          </p>
        </div>
        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
          <h3 className="font-semibold md:col-span-5">
            If I need additional support and help who should I contact?
          </h3>
          <p className="md:pl-0 md:col-span-7 text-lg">
            If you need additional support please contact your assigned Link
            Worker so they can assist you. Otherwise, go to our contact page and
            send us an email.
          </p>
        </div>
      </div>
    </div>
  );
}
