import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getLiveData } from "./services/newSlice";
import { useDispatch, useSelector } from "react-redux";
const Fixtures = () => {
  const dispatch = useDispatch();
  const [arrData, setArrData] = useState([]);
  const [batsMan, setBatsMan] = useState([]);
  const [initialBowling, setBowling] = useState([]);

  const { liveData } = useSelector((state) => ({
    liveData: state.cricketData.liveData,
  }));
  const { id } = useParams();
  useEffect(() => {
    dispatch(getLiveData({ id }));
  }, [dispatch]);

  useEffect(() => {
    if (
      liveData &&
      liveData.data &&
      liveData.data.runs &&
      liveData.data.runs.length
    )
      setArrData(liveData.data.runs);
  }, [liveData]);

  useEffect(() => {
    if (
      liveData &&
      liveData.data &&
      liveData.data.batting &&
      liveData.data.batting.length
    )
      setBatsMan(
        liveData.data.batting.filter(
          (res) => res.team_id === liveData.data.winner_team_id
        )
      );
  }, [liveData]);

  const myFun = (teamId) => {
    setBatsMan(liveData.data.batting.filter((res) => res.team_id === teamId));
    setBowling(liveData.data.bowling.filter((res) => res.team_id === teamId));
  };

  useEffect(() => {
    if (
      liveData &&
      liveData.data &&
      liveData.data.bowling &&
      liveData.data.bowling.length
    )
      setBowling(
        liveData.data.bowling.filter(
          (res) => res.team_id === liveData.data.winner_team_id
        )
      );
  }, [liveData]);

  return (
    <div>
      <div className="w-full h-14 text-white bg-red-600">
        <div className="pt-5 pl-5 text-xl ">
          {liveData && liveData.data && liveData.data.localteam.code} vs{" "}
          {liveData && liveData.data && liveData.data.visitorteam.code}
        </div>
      </div>
      <div className="text-red-400 text-xs pl-5 py-4 font-medium ">
        {liveData && liveData.data && liveData.data.note}
      </div>
      <hr></hr>

      <div className="my-3">
        {arrData &&
          arrData.length &&
          arrData.map((rdata) => (
            <div className="grid grid-cols-3 text-center ">
              <div className="font-bold" onClick={() => myFun(rdata.team_id)}>
                {rdata.team.name}{" "}
              </div>
              <div className="font-bold text-gray-700 ">
                Overs: {rdata.overs}
              </div>
              <div className="text-md text-gray-500">Run:{rdata.score}</div>
            </div>
          ))}
      </div>

      <div>
        <div className="h-6 bg-red-600 text-xs   text-white pl-5 pt-1">
          <div className="flex flex-row justify-between md:justify-evenly">
            <div>Batsman</div>
            <div className="flex flex-row justify-end space-x-3 pr-2 md:pl-24">
              <div className="w-5">R</div>
              <div className="w-5">B</div>
              <div className="w-5">4s</div>
              <div className="w-5">6s</div>
              <div className="w-10 ">SR</div>
            </div>
          </div>
        </div>

        <div>
          {batsMan &&
            batsMan.length &&
            batsMan.map((bdata) => (
              <div>
                <div className="flex flex-row justify-between md:justify-evenly mx-4 mb-2 ">
                  <div className="w-40">
                    <div className="text-red-400 text-xs font-medium py-2 ">
                      {bdata.batsman.fullname}
                    </div>
                    <div className="text-sm"> {bdata.team.code} </div>
                  </div>
                  <div className="flex flex-row justify-end space-x-3 pt-2 ">
                    <div className="w-5 text-sm">{bdata.score}</div>
                    <div className="w-5 text-sm">{bdata.ball}</div>
                    <div className="w-5 text-sm">{bdata.four_x}</div>
                    <div className="w-5 text-sm">{bdata.six_x}</div>

                    <div className="w-9 text-sm">{bdata.rate}</div>
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}
        </div>
        <hr></hr>
      </div>

      <div className="h-6 bg-red-600 text-xs   text-white pl-5 pt-1 ">
        <div className="flex flex-row justify-between md:justify-evenly">
          <div>Bowler</div>
          <div className="flex flex-row justify-end space-x-3 pr-2 md:pl-24 ">
            <div className="w-5">O</div>
            <div className="w-5">M</div>
            <div className="w-5">R</div>
            <div className="w-5">W</div>
            <div className="w-10">R</div>
          </div>
        </div>
      </div>
      <div>
        {initialBowling &&
          initialBowling.length &&
          initialBowling.map((bowlingdata) => (
            <div>
              <div className="flex flex-row justify-between md:justify-evenly mx-4 ">
                <div className="w-40">
                  <div className="text-red-400 text-xs font-medium py-2 ">
                    {bowlingdata.bowler.fullname}
                  </div>
                </div>
                <div className="flex flex-row justify-end space-x-3 py-2    ">
                  <div className="w-5 text-sm">{bowlingdata.overs}</div>
                  <div className="w-5 text-sm">{bowlingdata.medians}</div>
                  <div className="w-5 text-sm">{bowlingdata.runs}</div>
                  <div className="w-5 text-sm">{bowlingdata.wide}</div>

                  <div className="w-8 text-sm">{bowlingdata.rate}</div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
      </div>

      <div className=" bottom-1 fixed right-0  pb-4 pr-4  ">
        <div className=" rounded-full w-12 h-12 bg-red-600 text-white text-center pt-1 text-2xl  ">
          +
        </div>
      </div>
    </div>
  );
};
export default Fixtures;
