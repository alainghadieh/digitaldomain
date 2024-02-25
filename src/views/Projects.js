import { Testimonials } from "components/Testimonials";
import { useTypeWriter } from "hooks/useTypeWriter";
import React from "react";
export function Projects() {
  const message = useTypeWriter({
    texts: ["E-commerce", "Fintech", "Telecom", "Retail"],
    delay: 210,
    infinite: true,
  });
  return (
    // <div className="flex flex-col max-w-3xl">
    //   <h2>I offer a wide range of services, including but not limited to the following</h2>

    // </div>
    <section className="card">
      <div class="container px-6 py-10 mx-auto">
        <h1>
          Portfolio
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          <div
            class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
            }}
          >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 class="mt-4">
                Best website collections
              </h2>
              <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                Website
              </p>
            </div>
          </div>

          <div
            class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
            }}
          >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 class="mt-4">
                Block of Ui kit collections
              </h2>
              <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                Ui kit
              </p>
            </div>
          </div>

          <div
            class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
            }}
          >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/80">
              <h2 class="mt-4 text-bermuda-300">
                Ton’s of mobile mockup
              </h2>
              <p class="mt-2 text-spindle-700">
                Mockups
              </p>
            </div>
          </div>

          <div
            class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`,
            }}
          >
            <div class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
              <h2 class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                Huge collection of animation
              </h2>
              <p class="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                Animation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
