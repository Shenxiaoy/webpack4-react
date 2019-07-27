router.use('/chat', chatRoutes.routes(), chatRoutes.allowedMethods())

app.use(router.routes())
    .use(router.allowedMethods())
