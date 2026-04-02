import { useCallback } from 'react';
import type { Tag } from '../types';
import { defaultTags, STORAGE_KEYS } from '../utils/constants';
import useLocalStorage from './useLocalStorage';

function useTags() {
  const [tags, setTags] = useLocalStorage<Tag[]>(STORAGE_KEYS.TAGS, defaultTags);

  const addTag = useCallback(
    (name: string, color: string) => {
      const id = name.toLowerCase().replace(/\s+/g, '-');
      if (tags.some((tag) => tag.id === id)) {
        return;
      }
      setTags((prev) => [...prev, { id, name, color, isCustom: true }]);
    },
    [tags, setTags],
  );

  const removeTag = useCallback(
    (id: string) => {
      setTags((prev) => prev.filter((tag) => tag.id !== id));
    },
    [setTags],
  );

  const getTagById = useCallback(
    (id: string): Tag | undefined => {
      return tags.find((tag) => tag.id === id);
    },
    [tags],
  );

  const tagOptions = tags.map((tag) => ({ value: tag.id, label: tag.name }));

  return {
    tags,
    tagOptions,
    addTag,
    removeTag,
    getTagById,
  };
}

export default useTags;
