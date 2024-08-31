// pages/api/movies.js
export default async function handler(req, res) {
  try {
      const response = await fetch('https://www.binged.com/wp-json/binged-api/v1/movies?mode=streaming-soon');
          const data = await response.json();

              const structuredData = data.data.map(movie => ({
                    title: movie.title,
                          streaming_date: movie['streaming-date'],
                                languages: movie.languages,
                                      platforms: movie.platforms.map(platform => platform.name)
                                          }));

                                              res.status(200).json(structuredData);
                                                } catch (error) {
                                                    console.error('Error fetching data:', error);
                                                        res.status(500).json({ error: 'Error fetching data' });
                                                          }
                                                          }