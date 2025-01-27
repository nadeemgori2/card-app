import React, { useEffect, useState } from "react";
import { getItems } from "../services/api";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { useSearch } from "../context/SearchContext";

const Home: React.FC = () => {
  const { searchQuery } = useSearch();
  const [items, setItems] = useState<any[]>([]);
  const [filteredItems, setFilteredItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      setItems(result);
      setFilteredItems(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterItems = () => {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
    };

    filterItems();
  }, [searchQuery]);

  return (
    <div>
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <div className={styles.cardList}>
          {filteredItems.map((item) => (
            <Card key={item.id} title={item.name} description={item.email} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
