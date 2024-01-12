import { useEffect, useState } from 'react';

// project import
import axios from 'utils/axios';

// types
import { TeamInfoProps } from 'types/teaminfo';

// ==============================|| FETCH - TEAMINFO ||============================== //

export default function useTeamInfo() {
  const [teamInfo, setTeamInfo] = useState<TeamInfoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTeamInfo = async () => {
      setLoading(true);
      const response = await axios.get('api/v1/team');
      setTeamInfo(response.data[0].teams);
      setLoading(false);
    };

    fetchTeamInfo();
  }, []);

  return { teamInfo, loading };
}
