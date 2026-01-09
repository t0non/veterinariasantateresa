
export function BlueTriangleSeparator() {
  return (
    <div className="relative w-full z-10" style={{ marginBottom: '-1px' }}>
      <div className="bg-primary bg-gradient-primary">
          <div 
              className="w-full h-0 mx-auto"
              style={{
                  borderLeft: '50vw solid transparent',
                  borderRight: '50vw solid transparent',
                  borderBottom: '50px solid hsl(var(--background))',
              }}
          ></div>
      </div>
    </div>
  );
}
