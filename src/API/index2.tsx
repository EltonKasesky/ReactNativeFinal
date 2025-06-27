import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, Image } from "react-native";

const API_KEY = "5bc28c40e2086f58f18b44118330c5d8";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const DiscoverMovies = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) throw new Error("Não foi possível obter os dados.");
        return res.json();
      })
      .then((data) => {
        setMovies(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ScrollView>
      <Text style={styles.title}>Movies</Text>
      {movies.map((movie) => (
        <View key={movie.id} style={styles.item}>
          {movie.poster_path ? (
            <Image
              source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
              style={styles.poster}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.noImage}>
              <Text>No Image</Text>
            </View>
          )}
          <Text style={styles.name}>
            {movie.title} {movie.release_date ? `(${movie.release_date})` : ""}
          </Text>
          <Text style={styles.overview}>{movie.overview}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16, textAlign: "center" },
  item: { marginBottom: 20, paddingHorizontal: 16, alignItems: "center" },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 8 },
  overview: { fontSize: 14, color: "#333", marginTop: 4 },
  poster: { width: 200, height: 300, borderRadius: 8, marginTop: 8 },
  noImage: { width: 200, height: 300, alignItems: "center", justifyContent: "center", backgroundColor: "#eee", borderRadius: 8, marginTop: 8 },
});

export default DiscoverMovies;