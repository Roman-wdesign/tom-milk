
const gearRoutes = [
    {
        path: '/gear', name: 'gear', component: () => import('@/shared/views/GearView.vue'),
        children: [
            {
                path: 'calc',
                component: () => import('@/shared/views/GearCalcSour.vue')
            },
            {
                path: 'raw',
                component: () => import('@/shared/views/GearRawView.vue')
            }
        ]
    },
]
export default gearRoutes