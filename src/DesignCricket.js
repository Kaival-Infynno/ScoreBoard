import React, { useEffect, useState } from "react";
import Dhome from "./images/DDarkhome.png";
import Dbeats from "./images/DDBeats1.jpg";
import Dwallets from "./images/DDarkWallet.png";
import Dmore from "./images/Dmore.png";
import { getLiveScore } from "./services/cricketScoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DesignCricket = () => {
  const dispatch = useDispatch();

  const [cricketData, setCricetData] = useState([]);
  const { score } = useSelector((state) => ({
    score: state.cricketScore.score,
  }));
  const { id } = score;

  useEffect(() => {
    dispatch(getLiveScore());
  }, [dispatch]);
  useEffect(() => {
    if (score && score.data && score.data.length) setCricetData(score.data);
  }, [score]);

  return (
    <>
      <div className="w-full   bg-red-600 py-2 px-2">
        <div className="text-white ml-2 font-semibold my-4 text-xl">
          CricApp
        </div>
      </div>
      <div className=" font-bold   text-xl bg-gray-100">
        <div className="py-2 pl-5">Upcoming Matches</div>

        {cricketData &&
          cricketData.length &&
          cricketData.map((data) => (
            <Link to={`/fixtures/${data.id}`}>
              <div className="shadow mx-5 mt-5 rounded-lg md:w-96 ">
                <div className="flex flex-row justify-between  ">
                  <div className="py-2 pl-2">
                    <div className="">
                      <img
                        src={data.localteam.image_path}
                        className=" w-16 h-16 "
                      />
                    </div>
                  </div>

                  <div>
                    <div className=" text-sm pt-2 text-center">
                      {data.localteam.code}
                    </div>
                    <div className="text-sm text-gray-500 text-center  ">
                      {data.localteam.name}
                    </div>
                    <div className="text-blue-700 text-center text-sm">
                      {data.localteam.id}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm pt-2 text-center">
                      {data.visitorteam.code}
                    </div>
                    <div className="text-sm text-gray-500 text-center">
                      {data.visitorteam.name}
                    </div>
                    <div className="text-blue-700 text-center text-sm">
                      {data.visitorteam.id}
                    </div>
                  </div>

                  <div className="py-2 pr-2">
                    <div className="">
                      <img
                        src={data.visitorteam.image_path}
                        className=" w-16 h-16"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-xs text-center text-blue-900">
                  {data.note}
                </div>
              </div>
            </Link>
          ))}
        <div className="fixed bottom-0 w-screen h-11   ">
          <div className="flex flex-row justify-around bg-white pt-2">
            <div>
              <img src={Dhome} className="w-5 h-5 m-auto" />
              <div className="text-xs text-gray-500">HOME</div>
            </div>
            <div>
              <img src={Dbeats} className="w-5 h-5" />
              <div className="text-xs text-gray-500">MY BETS</div>
            </div>
            <div>
              <img src={Dwallets} className="w-5 h-5 m-auto" />
              <div className="text-xs text-gray-500">WALLET</div>
            </div>
            <div>
              <img src={Dmore} className="w-5 h-5 m-auto" />
              <div className="text-xs text-gray-500">MORE</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignCricket;
