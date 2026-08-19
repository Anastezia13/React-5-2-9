import { Box, Text } from '@mantine/core';
import { SkillsInput } from './SkillsInput';
import styles from './Filters.module.css';

interface FiltersProps {
  skills: string[];
  onAddSkill: (skill: string) => void;
  onRemoveSkill: (skill: string) => void;
}

export const Filters = ({
  skills,
  onAddSkill,
  onRemoveSkill,
}: FiltersProps) => {
  return (
    <Box>
      <Text className={styles.skillsLabel}>Ключевые навыки</Text>
      <SkillsInput
        skills={skills}
        onAdd={onAddSkill}
        onRemove={onRemoveSkill}
      />
    </Box>
  );
};
