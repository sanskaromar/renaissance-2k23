

Use this component by,
        <Sponsors ImageList={List} />

where List is an Array of size 32 that contains relative path to the images of sponsors in text format.

IMPORTANT : Changing the size of Array ( the number of sponsors ) will require some changes in the code too.

for example,

List = [
    ...
    './SponsorsImages/ecellLogo.png',
    ...
]