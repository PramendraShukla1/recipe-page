import React from "react";
import image from "./assets/images/image-omelette.jpeg";



const App = () => {
  return (
    <div className="bg-[#f3e5d8] w-full flex flex-col items-center lg:p-20 p-0 ">
      <div className="lg:p-10 p-0 lg:w-[800px] w-full bg-white lg:rounded-3xl rounded-none">
        <div className=" h-full p-5 lg:p-0">
          {/* Image div starts */}
          <div className="w-full ">
            <img
              src={image}
              alt=""
              className="w-full object-cover h-full rounded-2xl"
            />
          
          </div>
          {/* Image div Ends */}
          {/* Heading and subTitle starts */}
          <div className="mt-10">
            <h1 className="text-4xl font-semibold font-serif">
              Simple Omelette Recipe
            </h1>
            <p className="font-serif mt-6 text-gray-500 text-lg">
              An easy and quick dish, perfect for any meal. The classic omelette
              combines beaten eggs cooked to perfection, optionally filled with
              your choice of cheese, vegetables, or meats.
            </p>
          </div>
          {/* Heading and subTitle starts */}
          {/* Cooking Timing starts */}
          <div className="bg-[#fef7fc] h-auto mt-10 rounded-3xl p-10">
            <h1 className="text-2xl font-semibold text-[#8e566f]">
              Prepration Time
            </h1>
            <ul className="list-disc font-serif flex flex-col gap-3 p-3">
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">Total: </span>
                Approximately 10 minutes
              </li>
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">Preparation: </span>5
                minutes
              </li>
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">Cooking: </span>5
                Minutes
              </li>
            </ul>
          </div>
          {/* Cooking Timing ends */}
          {/* Cooking Ingredients starts */}
          <div className="mt-10">
            <h1 className="text-3xl font-semibold font-serif text-amber-700">
              Ingredients
            </h1>
            <ul className="list-disc p-5 text-lg text-gray-500 flex flex-col gap-3">
              <li>2-3 large-eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <hr className="h-[0.5px] bg-gray-600" />
          {/* Cooking Ingredients ends */}

          {/* Cooking Instructions starts */}
          <div className="mt-10 rounded-3xl ">
            <h1 className="text-3xl font-semibold font-serif text-amber-700 mb-3">
              Instructions
            </h1>
            <ul className="list-decimal font-serif p-3 flex flex-col gap-5">
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">
                  Beat the eggs:{" "}
                </span>
                In a bowl, beat the eggs with a pinch of salt and pepper until
                the are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">
                  Heat the pan:{" "}
                </span>
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">
                  Cook the omelette:{" "}
                </span>
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">
                  Add fillings(optional):{" "}
                </span>
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">
                  Fold and serve:{" "}
                </span>
                As the omelette continuous to cook, carefully lift one edge and
                fold it over the fillings over one half of the omelette.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold text-gray-700">Enjoy: </span>
                Serve hot, with additional salt and pepper if needed.
              </li>
            </ul>
          </div>
          <hr className="h-[0.5px] bg-gray-600 mt-5 mb-5" />
          {/* Cooking Instructions ends */}
          {/* Cooking nutrition starts */}
          <h1 className="text-3xl font-semibold font-serif text-amber-700 mb-3">
            Nutrition
          </h1>
          <p className="mt-5 text-gray-500 text-lg">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className="mt-5 w-full flex justify-between mb-5 lg:mb-0">
            {/* Left Div */}
            <div className="w-1/2">
              <p className="text-gray-500 text-lg">Calories</p>
              <hr className="h-[0.5px] bg-gray-600 mt-2 mb-2" />
              <p className="text-gray-500 text-lg">Carbs</p>
              <hr className="h-[0.5px] bg-gray-600 mt-2 mb-2" />
              <p className="text-gray-500 text-lg">Protein</p>
              <hr className="h-[0.5px] bg-gray-600 mt-2 mb-2" />
              <p className="text-gray-500 text-lg">Fat</p>
            </div>

            {/* Right Div */}
            <div className="w-1/2">
              <p className="text-amber-800 font-semibold text-xl">277kcal</p>
              <hr className="h-[0.5px] bg-gray-600 mt-2 mb-2" />
              <p className="text-amber-800 font-semibold text-xl">0g</p>
              <hr className="h-[0.5px] bg-gray-600 mt-2 mb-2" />
              <p className="text-amber-800 font-semibold text-xl">20g</p>
              <hr className="h-[0.5px] bg-gray-600 mt-2 mb-2" />
              <p className="text-amber-800 font-semibold text-xl">22g</p>
            </div>
          </div>
          {/* Cooking nutrition starts */}
          {/* Credits Start */}
          <div className="mt-20 flex justify-center">
            <a href="https://www.linkedin.com/in/pramendra-shukla-11812a221/" target="_blank"><p className="text-xl text-gray-600 hover:text-gray-950">Made With ❤️ By Pramendra Shukla</p></a>
          </div>
           {/* Credits Start */}
        </div>
      </div>
    </div>
  );
};

export default App;
