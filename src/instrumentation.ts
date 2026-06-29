export async function register() {
  // process.on is Node.js only — skip in Edge Runtime
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    process.on('unhandledRejection', (reason) => {
      if (reason === undefined || reason === null) return
      console.error('[unhandledRejection]', reason)
    })
  }
}
