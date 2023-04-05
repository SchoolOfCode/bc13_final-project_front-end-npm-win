import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

export default function FeedbackModal({ user_id, event_name, open, setOpen }) {
  //const [heartState, setHeartState] = useState(0);
  // const [data, setData] = useState([
  //   { user_id: 0, event_name: "", comment: "", rating: 0 },
  // ]);

  // Is this submitFunction going to get called on loading? How do we change that, if so?
  function submitReview(data) {
    //setData({ user_id: 0, event_name: "", comment: "", rating: 0 });
    setOpen(false);
  }

  // useEffect(() => {
  //   // Is /api/admin the right path for a post request to the Feedback table?
  //   fetch("/api/admin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Success:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  //   // Do we just want this to occur whenever data changes?
  // }),
  //   [data];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4  shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex font-mons text-black items-center justify-center ">
                    <h3 className="text-lg font-mons text-gray-900">
                      How was this event?
                    </h3>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      <p className="my-4 font-light">
                        <div className="rating gap-1 justify-center">
                          <input
                            type="radio"
                            value="1"
                            name="rating-3"
                            className="mask mask-heart bg-red-400"
                            // onChange={() => setHeartState(1)}
                          />
                          <input
                            type="radio"
                            value="2"
                            name="rating-3"
                            className="mask mask-heart bg-orange-400"
                            // onChange={() => setHeartState(2)}
                          />
                          <input
                            type="radio"
                            value="3"
                            name="rating-3"
                            className="mask mask-heart bg-yellow-400"
                            // onChange={() => setHeartState(3)}
                          />
                          <input
                            type="radio"
                            value="4"
                            name="rating-3"
                            className="mask mask-heart bg-lime-400"
                            // onChange={() => setHeartState(4)}
                          />
                          <input
                            type="radio"
                            value="5"
                            name="rating-3"
                            className="mask mask-heart bg-green-400"
                            // onChange={() => setHeartState(5)}
                          />
                        </div>
                      </p>{" "}
                    </Dialog.Title>
                    <div className="">
                      <label for="message" class=" font-mons text-gray-900 ">
                        Write a review...
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-mons"
                        placeholder="Write your thoughts here..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="justify-center mt-5 sm:mt-6">
                    <Button
                      className="inline-flex w-full justify-center text-center "
                      buttonText="Submit review"
                      handleClick={() => submitReview()}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
