<script lang="ts" setup>
const { data: requests } = useFetch("/api/request");
const { data: claims } = useFetch("/api/claim");
</script>

<template>
  <div class="size-full grid grid-cols-2 gap-2">
    <Card>
      <CardHeader>
        <CardTitle>Versicherungsanträge</CardTitle>
        <CardDescription>
          Übersicht über alle Versicherungsanträge
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kunde</TableHead>
              <TableHead>Beschreibung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="request in requests"
              :key="request.id"
              @click="navigateTo(`/request/${request.id}`)"
            >
              <TableCell>{{ request.customer }}</TableCell>
              <TableCell>{{ request.description }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Schadensmeldungen</CardTitle>
        <CardDescription>
          Übersicht über alle Schadensmeldungen
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kunde</TableHead>
              <TableHead>Beschreibung</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              v-for="claim in claims"
              :key="claim.id"
              @click="navigateTo(`/claim/${claim.id}`)"
            >
              <TableCell>{{ claim.customer }}</TableCell>
              <TableCell>{{ claim.description }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
</template>
