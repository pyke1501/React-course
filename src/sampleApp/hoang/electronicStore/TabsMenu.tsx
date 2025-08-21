import * as Tabs from '@radix-ui/react-tabs';
import styles from './TabsMenu.module.css';

type TabsMenuProps = {
  onChange: (value: string) => void;
};

export default function TabsMenu({ onChange  }: TabsMenuProps) {

    return (
        <Tabs.Root defaultValue="all" onValueChange={onChange}>
        <Tabs.List className={styles.tabsList}>
            <Tabs.Trigger value="all" className={styles.tabTrigger}>ALL</Tabs.Trigger>
            <Tabs.Trigger value="posts" className={styles.tabTrigger}>Posts</Tabs.Trigger>
            <Tabs.Trigger value="todos" className={styles.tabTrigger}>Todos</Tabs.Trigger>
            <Tabs.Trigger value="photos" className={styles.tabTrigger}>Photos</Tabs.Trigger>
        </Tabs.List>
        </Tabs.Root>
    )
}