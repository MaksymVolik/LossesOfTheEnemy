import axios from 'axios';

axios.defaults.baseURL = 'https://russianwarship.rip/api/v2/';

export const useFetch = () => {
  const request = async (date, lang) => {
    try {
      const response = await Promise.all([
        axios.get(`/statistics/${date}`, {
          headers: {
            'Content-Type': 'aplication/json',
          },
        }),
        axios.get(`/terms/${lang}`, {
          headers: {
            'Content-Type': 'aplication/json',
          },
        }),
      ]);
      return {
        data: _transformData(response[0].data.data, response[1].data.data),
        date: response[0].data.data.date,
      };
    } catch (error) {
      throw error;
    }
  };

  const _transformData = (stats, terms) => {
    const items = [];

    for (let item in stats.stats) {
      items.push({
        name: item,
        stats: stats.stats[item],
        increase: stats.increase[item],
        title: terms[item].title,
        icon: terms[item].icon,
      });
    }
    return items;
  };

  return {request};
};
