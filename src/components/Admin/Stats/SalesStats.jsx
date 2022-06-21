import React from 'react'
import { Text, Paper, Group } from '@mantine/core';

const SalesStats = (props) => {

  return (
  <>
  <Paper withBorder radius="md" p="md" key={null}>
    <Group>
      <div>
        <Text color="dimmed" size="xs" transform="uppercase" weight={700}>
          Total Sales
        </Text>
        <Text weight={700} size="xl">{props.totalSales}</Text>
      </div>
    </Group>
  </Paper>
  </>
  )
}

export default SalesStats;