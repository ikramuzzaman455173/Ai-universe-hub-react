import React from "react";

const CardModal = ({ singleData }) => {
  // console.log(singleData);
  const { tool_name, description, image_link, input_output_examples, features, integrations, pricing, accuracy } = singleData
  let feature = Object.values(features || '')
  // console.log(feature);
  return (
    <>
      {/* Put this part before </body> tag */}
      {/* <label  htmlFor="my-modal-3" className="text-error cursor-pointer active:text-primary"> */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl relative">
          <label className="btn btn-sm btn-circle absolute right-2 bg-error border-0 text-white top-2" htmlFor="my-modal-3">✕</label>
          {/* ====card start===== */}
          <div className="card lg:card-side bg-base-100  rounded my-5">
            <div className="card-body border-2 rounded mx-2 w-full bg-indigo-50">
              <h2 className="card-title">{description}</h2>
              <div className="flex justify-between md:flex-wrap mt-4">
                <div className="border-2 rounded bg-white text-green-600 text-center p-4 font-bold md:text-xl text-md shadow-md">{pricing ? pricing[0].plan : 'Free Of'} <br /> <span className="text-gray-700 font-medium mt-1">{pricing ? pricing[0].price : 'Cost/Basic'}</span></div>

                <div className="border-2 rounded bg-white text-orange-600 text-center p-4 font-bold md:text-xl text-md shadow-md">{pricing ? pricing[1].plan : 'Free Of'} <br /> <span className="text-gray-700 font-medium mt-1">{pricing ? pricing[1].price : 'Cost/Pro'}</span></div>

                <div className="border-2 rounded bg-white text-red-500 text-center p-4 font-bold md:text-xl text-md shadow-md">{pricing ? pricing[2].plan : 'Free Of'} <br /> <span className="text-gray-700 font-medium mt-1">{pricing ? pricing[2].price : 'Cost/Enterprise'}</span></div>
              </div>
              <div className="grid md:grid-cols-2 mt-5">
                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Features</h3>
                  <ul className="list-disc pl-5">
                    {/* <li className="text-xl md:font-medium font-normal text-dark">feature-1</li> */}
                    {
                      Object.values(features||'').map((e,i)=> <li key={i} className="text-xl md:font-medium font-normal text-dark">{e?e.feature_name:'Data Not Found !!!'}</li>)
                    }
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Integrations</h3>
                  <ul className="list-disc pl-5">
                    {integrations && integrations.length > 0 ? (
                      integrations.map((e, i) => (
                        <li key={i} className="text-xl md:font-medium font-normal text-dark">
                          {e}
                        </li>
                      ))
                    ) : (
                      <li className="text-md md:font-medium font-normal text-dark">Data Not Found</li>
                    )}
                  </ul>

                </div>
              </div>
            </div>
            <figure className="lg:w-1/2 lg:full md:w-full w-full flex flex-col lg:mt-0 md:mt-5 border-2 rounded p-2">
              <img
                src={image_link ? image_link[0] : ''}
                alt="Album"
              />
              <p className="lg:text-md md:text-xl font-bold mt-2 text-center ">{input_output_examples ? input_output_examples[0].input : 'Data Not Found !!!'}</p>
              <p className="mt-1 text-center md:text-md lg:text-sm font-medium">{input_output_examples ? input_output_examples[1].output : 'Data Not Found !!!'}</p>
            </figure>
          </div>
          {/* ====card end===== */}
        </div>
      </div>
    </>
  );
};

export default CardModal