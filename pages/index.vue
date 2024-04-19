<script setup lang="ts">
const user = useSupabaseUser()

const supabase = useSupabaseAuthClient()

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })

  if (error)
    console.error(error)
}

const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error(error)
    return
  }

  await navigateTo('/')
}

const name = computed(
  () => user.value?.user_metadata.full_name,
)
const profile = computed(
  () => user.value?.user_metadata.avatar_url,
)
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <div v-if="user" class="rounded p-3 flex items-center space-x-3 bg-white">
      <img class="rounded-full w-12 h-12 border-2 border-blue-400" :src="profile">
      <div class="text-right">
        <div class="font-medium">
          {{ name }}
        </div>
        <button class="text-sm underline text-slate-500" @click="logout">
          Log out
        </button>
      </div>

      <Products />
    </div>
    <div v-else>
      <Auth />
      <button @click="login">
        Sign in with Github
      </button>
    </div>
  </div>
</template>
